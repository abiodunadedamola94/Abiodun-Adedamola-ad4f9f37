import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "abiodunadedamola94@gmail.com";

interface Payload {
  path?: string;
  referrer?: string | null;
  userAgent?: string | null;
  language?: string | null;
  screenSize?: string | null;
  sessionId?: string;
}

function esc(s: string | null | undefined) {
  if (!s) return "—";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Simple in-memory rate limiter (best-effort; resets on cold start)
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 10; // 10 visit pings per IP per minute
const ipHits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    ipHits.set(ip, arr);
    return true;
  }
  arr.push(now);
  ipHits.set(ip, arr);
  return false;
}

function clip(s: unknown, max: number): string | null {
  if (typeof s !== "string") return null;
  return s.slice(0, max);
}

function genericError(status: number, message = "Internal server error") {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      console.error("[notify-visit] missing API key configuration");
      return genericError(500);
    }

    let raw: Payload;
    try {
      raw = await req.json();
    } catch {
      return genericError(400, "Invalid request");
    }

    // Validate / clip every input
    const p: Payload = {
      path: clip(raw.path, 500) ?? "/",
      referrer: clip(raw.referrer, 1000),
      userAgent: clip(raw.userAgent, 500),
      language: clip(raw.language, 20),
      screenSize: clip(raw.screenSize, 20),
      sessionId: clip(raw.sessionId, 64) ?? undefined,
    };

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:20px;color:#111">
        <h2 style="margin:0 0 12px">New visitor on your portfolio</h2>
        <table style="font-size:13px;border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 0;color:#666;width:120px">Path</td><td>${esc(p.path)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Referrer</td><td>${esc(p.referrer)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Language</td><td>${esc(p.language)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Screen</td><td>${esc(p.screenSize)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">User Agent</td><td style="font-size:11px;color:#444">${esc(p.userAgent)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Session</td><td style="font-size:11px;color:#888">${esc(p.sessionId)}</td></tr>
        </table>
      </div>
    `;

    const res = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `New visit: ${p.path ?? "/"}`,
        html,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("[notify-visit] Resend error", res.status, data);
      return genericError(502, "Email delivery failed");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Unknown error";
    console.error("[notify-visit] failed", detail);
    return genericError(500);
  }
});
