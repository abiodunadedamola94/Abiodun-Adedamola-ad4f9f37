import { Play } from "lucide-react";

const tools = [
  {
    name: "Figma",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
        <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
        <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
        <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
        <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: "Lovable",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.5C12 21.5 3 14.5 3 8.5C3 5.46243 5.46243 3 8.5 3C10.1413 3 11.6087 3.72746 12.6 4.87476C13.5913 3.72746 15.0587 3 16.7 3C19.7376 3 22.2 5.46243 22.2 8.5C22.2 14.5 12 21.5 12 21.5Z" fill="#FF4D6D" />
      </svg>
    ),
  },
  {
    name: "After Effects",
    icon: (
      <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1a0a2e]">
        <span className="text-[9px] font-bold leading-none text-[#9b6dff]">Ae</span>
      </div>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Framer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 0H20V8H12L20 16H12V24L4 16V8H12L4 0Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.44 7.67 11.18-.11-.94-.2-2.39.04-3.42.22-.94 1.47-6.24 1.47-6.24s-.38-.75-.38-1.87c0-1.75 1.02-3.06 2.28-3.06 1.07 0 1.59.8 1.59 1.77 0 1.08-.69 2.7-1.05 4.2-.3 1.25.62 2.27 1.85 2.27 2.22 0 3.72-2.86 3.72-6.24 0-2.57-1.74-4.37-4.22-4.37-2.88 0-4.57 2.16-4.57 4.4 0 .87.33 1.8.75 2.31.08.1.09.19.07.29-.08.31-.25 1.01-.28 1.15-.04.18-.13.22-.3.13-1.12-.52-1.82-2.16-1.82-3.47 0-2.82 2.05-5.42 5.91-5.42 3.1 0 5.51 2.21 5.51 5.17 0 3.08-1.94 5.56-4.63 5.56-.9 0-1.76-.47-2.05-1.02l-.56 2.08c-.2.78-.75 1.75-1.11 2.34.84.26 1.73.4 2.65.4 6.63 0 12-5.37 12-12S18.63 0 12 0z" fill="#E60023" />
      </svg>
    ),
  },
];

const skills = [
  "UX/UI Design",
  "Cognitive Design",
  "Unbranded and Rebranding",
  "Product Design",
  "Website Design",
  "Mobile App Design",
  "Prototyping",
];

function ReelArtwork() {
  return (
    <svg viewBox="0 0 500 360" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="reelBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#172235" />
          <stop offset="55%" stopColor="#0f1625" />
          <stop offset="100%" stopColor="#0b1018" />
        </linearGradient>
      </defs>
      <rect width="500" height="360" rx="28" fill="url(#reelBg)" />
      <rect x="34" y="32" width="164" height="296" rx="22" fill="#101317" stroke="rgba(255,255,255,0.05)" />
      <circle cx="117" cy="134" r="50" fill="#39465b" />
      <circle cx="117" cy="118" r="26" fill="#c8c0be" />
      <path d="M67 262c14-45 39-67 50-67s36 22 50 67" fill="#4e596b" />
      <rect x="83" y="209" width="68" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="97" y="226" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
      <rect x="230" y="36" width="225" height="94" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.05)" />
      <rect x="230" y="150" width="225" height="74" rx="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
      <rect x="230" y="242" width="225" height="74" rx="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
      <rect x="247" y="53" width="92" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="247" y="71" width="126" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="247" y="88" width="72" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="247" y="167" width="112" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="247" y="186" width="134" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="247" y="259" width="102" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="247" y="278" width="124" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <circle cx="406" cy="71" r="22" fill="rgba(115,86,255,0.2)" />
      <circle cx="406" cy="185" r="22" fill="rgba(0,196,180,0.15)" />
      <circle cx="406" cy="277" r="22" fill="rgba(255,255,255,0.08)" />
    </svg>
  );
}

export default function Toolstack() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Tool Stack
          </h2>

          <div className="mb-5 grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-muted-foreground/20"
              >
                <div className="flex-shrink-0">{tool.icon}</div>
                <span className="text-xs font-medium text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[22px] border border-border bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[220px] bg-[linear-gradient(135deg,#10192a_0%,#09101b_100%)] p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(123,92,255,0.18),transparent_22%),radial-gradient(circle_at_70%_80%,rgba(0,196,180,0.12),transparent_24%)] opacity-70" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="w-full max-w-[320px] overflow-hidden rounded-[22px] border border-foreground/10 bg-foreground/[0.02] shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
                    <ReelArtwork />
                  </div>
                  <button
                    type="button"
                    aria-label="Play reel"
                    className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/90 text-background shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
                  >
                    <Play size={16} fill="currentColor" className="ml-0.5" />
                  </button>
                </div>
              </div>

              <div className="border-t border-border p-4 sm:border-l sm:border-t-0 sm:p-5">
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  <span>Editing stack</span>
                  <span>2025</span>
                </div>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between rounded-xl border border-border bg-secondary px-3 py-2"
                    >
                      <span className="text-[11px] text-muted-foreground">{skill}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
