import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SESSION_STORAGE_KEY = "portfolio_session_id";
const NOTIFIED_FLAG_KEY = "portfolio_session_notified";

function getOrCreateSessionId(): string {
  try {
    const existing = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const fresh = crypto.randomUUID();
    sessionStorage.setItem(SESSION_STORAGE_KEY, fresh);
    return fresh;
  } catch {
    // sessionStorage may be unavailable (privacy mode); fall back to per-load id
    return crypto.randomUUID();
  }
}

/**
 * Tracks every route change as a visit.
 * Sends ONE notification email per browser session (first visit only).
 */
export function useVisitorTracking() {
  const location = useLocation();
  const lastLoggedPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastLoggedPath.current === location.pathname) return;
    lastLoggedPath.current = location.pathname;

    const sessionId = getOrCreateSessionId();
    const path = location.pathname + location.search;

    const visitPayload = {
      session_id: sessionId,
      path: path.slice(0, 500),
      referrer: document.referrer ? document.referrer.slice(0, 1000) : null,
      user_agent: navigator.userAgent.slice(0, 500),
      language: navigator.language.slice(0, 20),
      screen_size: `${window.screen.width}x${window.screen.height}`.slice(0, 20),
      country: null,
    };

    (async () => {
      const { error } = await supabase.from("visits").insert(visitPayload);
      if (error) {
        console.warn("[visitor-tracking] insert failed", error.message);
        return;
      }

      // Fire one notification email per session
      let alreadyNotified = false;
      try {
        alreadyNotified = sessionStorage.getItem(NOTIFIED_FLAG_KEY) === "1";
      } catch {
        // ignore
      }
      if (alreadyNotified) return;

      try {
        sessionStorage.setItem(NOTIFIED_FLAG_KEY, "1");
      } catch {
        // ignore
      }

      const { error: fnError } = await supabase.functions.invoke("notify-visit", {
        body: {
          path: visitPayload.path,
          referrer: visitPayload.referrer,
          userAgent: visitPayload.user_agent,
          language: visitPayload.language,
          screenSize: visitPayload.screen_size,
          sessionId: visitPayload.session_id,
        },
      });
      if (fnError) {
        console.warn("[visitor-tracking] notify-visit failed", fnError.message);
      }
    })();
  }, [location.pathname, location.search]);
}
