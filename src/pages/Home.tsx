import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import workLeaptra from "@/assets/work-leaptra.png";

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Hero */}
        <section className="pt-4 sm:pt-8">
          <div className="mb-4">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <svg viewBox="0 0 40 40" className="h-full w-full">
                <defs>
                  <radialGradient id="avatarGlow" cx="35%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#6a6a6a" />
                    <stop offset="60%" stopColor="#242424" />
                    <stop offset="100%" stopColor="#0d0d0d" />
                  </radialGradient>
                </defs>
                <rect width="40" height="40" rx="20" fill="url(#avatarGlow)" />
                <circle cx="20" cy="16" r="7" fill="#9f9f9f" opacity="0.92" />
                <path d="M10 34c1.8-6 5.2-9 10-9s8.2 3 10 9" fill="#6f6f6f" opacity="0.82" />
              </svg>
            </div>
          </div>

          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Hey, Adedamola here
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">How's Your Day?</p>

          <p className="mt-4 max-w-[520px] text-xs leading-5 text-muted-foreground">
            I'm your go-to Product Designer from the wild intersection of creativity
            and precision. Once an ops brain, now a full-time digital craftsman, I
            turn "not sure how this will work" ideas into sleek, intuitive, "Oh wow,
            that's clean!" experiences. Whether I'm designing ops like a stealth-mode
            UX ninja or planning web-facing teams, I bring strategy, imagination, and
            a touch of playful chaos to every project.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-xs text-foreground transition-colors hover:bg-secondary"
          >
            Contact
          </Link>
        </section>

        {/* Featured Work */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Work
          </h2>

          <div className="rounded-[26px] bg-gradient-to-br from-[#6b4bff] via-[#1f67ff] to-[#23d8b9] p-[1px] shadow-[0_18px_60px_rgba(60,40,160,0.22)]">
            <div className="overflow-hidden rounded-[25px] border border-border/20 bg-card">
              <Link to="/projects/leaptra" className="block">
                <div className="relative aspect-[1.55/1] overflow-hidden bg-[linear-gradient(135deg,#121212_0%,#0a0a0a_100%)]">
                  <img
                    src={workLeaptra}
                    alt="LeapTra AI work section"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#7b5cff] to-[#4617a9]">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 8.5L5.5 2.8L9 8.5" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-foreground">LeapTra AI</span>
                  <span className="text-[10px] text-muted-foreground/60">|</span>
                  <span className="text-[10px] text-muted-foreground">2025 - Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground">+2</span>
                  <ArrowUpRight size={14} className="text-muted-foreground/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/projects"
              className="rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-muted-foreground/20 hover:bg-secondary"
            >
              <h3 className="text-xs font-medium text-foreground">Projects</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">View all work</p>
            </Link>
            <Link
              to="/about"
              className="rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-muted-foreground/20 hover:bg-secondary"
            >
              <h3 className="text-xs font-medium text-foreground">About</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">My journey</p>
            </Link>
            <Link
              to="/toolstack"
              className="rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-muted-foreground/20 hover:bg-secondary"
            >
              <h3 className="text-xs font-medium text-foreground">Tool Stack</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">What I use</p>
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-muted-foreground/20 hover:bg-secondary"
            >
              <h3 className="text-xs font-medium text-foreground">Contact</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">Say hello</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-4">
              {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/60">Adedamola Ade — Product Designer</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
