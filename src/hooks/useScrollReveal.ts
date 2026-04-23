import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.reveal` class
 * once they enter the viewport. Re-runs on route changes
 * by depending on `key`.
 */
export function useScrollReveal(key?: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}
