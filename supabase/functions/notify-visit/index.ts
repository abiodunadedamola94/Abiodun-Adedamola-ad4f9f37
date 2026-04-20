import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "Abiodunadedamola94@gmail.com";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const p: Payload = await req.json();

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

    const data = await res.json();
    if (!res.ok) {
      console.error("[notify-visit] Resend error", res.status, data);
      return new Response(JSON.stringify({ error: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[notify-visit] failed", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
