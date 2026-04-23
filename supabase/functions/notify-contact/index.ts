import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "Abiodunadedamola94@gmail.com";

interface Payload {
  id?: string;
  fullName?: string;
  email?: string;
  message?: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Simple in-memory rate limiter (best-effort; resets on cold start)
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3; // 3 contact submissions per IP per minute
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      console.error("[notify-contact] missing API key configuration");
      return genericError(500);
    }

    let body: Payload;
    try {
      body = await req.json();
    } catch {
      return genericError(400, "Invalid request");
    }

    const { id, fullName, email, message } = body;

    // Server-side validation
    if (
      !fullName || typeof fullName !== "string" ||
      !email || typeof email !== "string" ||
      !message || typeof message !== "string"
    ) {
      return genericError(400, "Invalid request");
    }
    const name = fullName.trim();
    const mail = email.trim();
    const msg = message.trim();
    if (
      name.length < 1 || name.length > 100 ||
      mail.length < 3 || mail.length > 255 || !EMAIL_RE.test(mail) ||
      msg.length < 1 || msg.length > 5000
    ) {
      return genericError(400, "Invalid request");
    }
    if (id && (typeof id !== "string" || id.length > 64)) {
      return genericError(400, "Invalid request");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(mail);
    const safeMsg = escapeHtml(msg).replace(/\n/g, "<br/>");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:20px;color:#111">
        <h2 style="margin:0 0 12px">New portfolio message</h2>
        <p style="margin:0 0 4px"><strong>From:</strong> ${safeName}</p>
        <p style="margin:0 0 16px"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <div style="border-left:3px solid #6366f1;padding:12px 16px;background:#f9fafb;border-radius:6px">
          ${safeMsg}
        </div>
        ${id ? `<p style="margin-top:20px;font-size:11px;color:#888">ID: ${escapeHtml(id)}</p>` : ""}
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
        reply_to: mail,
        subject: `New message from ${name}`,
        html,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("[notify-contact] Resend error", res.status, data);
      return genericError(502, "Email delivery failed");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Unknown error";
    console.error("[notify-contact] failed", detail);
    return genericError(500);
  }
});
