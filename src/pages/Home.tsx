import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import workLeaptra from "@/assets/work-leaptra.png";
import avatar80 from "@/assets/avatar-80.jpg";
import avatar160 from "@/assets/avatar-160.jpg";
import avatar320 from "@/assets/avatar-320.jpg";

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Hero */}
        <section className="pt-4 sm:pt-8 reveal">
          <div className="mb-4">
            <div
              className="group relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 overflow-hidden rounded-full border border-border bg-card shadow-[0_2px_10px_-2px_hsl(var(--foreground)/0.12)] ring-1 ring-border/40 transition-transform duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_8px_24px_-6px_hsl(var(--foreground)/0.25)] cursor-pointer"
              aria-label="Profile photo of Adedamola Ade"
            >
              <img
                src={avatar160}
                srcSet={`${avatar80} 80w, ${avatar160} 160w, ${avatar320} 320w`}
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                alt="Adedamola Ade profile avatar"
                width={64}
                height={64}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.04] grayscale-0 group-hover:grayscale"
              />
            </div>
          </div>

          <h1 className="text-xl font-semibold tracking-tight text-foreground animate-fade-in-up">
            Hey, Adedamola here
          </h1>
          <p className="mt-1 text-xs text-muted-foreground animate-fade-in-up [animation-delay:80ms] opacity-0 [animation-fill-mode:forwards]">
            How's Your Day?
          </p>

          <p className="mt-4 max-w-[520px] text-xs leading-5 text-muted-foreground animate-fade-in-up [animation-delay:160ms] opacity-0 [animation-fill-mode:forwards]">
            I'm your go-to Product Designer from the wild intersection of creativity
            and precision. Once an ops brain, now a full-time digital craftsman, I
            turn "not sure how this will work" ideas into sleek, intuitive, "Oh wow,
            that's clean!" experiences. Whether I'm designing ops like a stealth-mode
            UX ninja or planning web-facing teams, I bring strategy, imagination, and
            a touch of playful chaos to every project.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs text-foreground transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_hsl(var(--foreground)/0.25)] active:translate-y-0 active:scale-[0.98] press"
          >
            Contact
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </section>

        {/* Featured Work */}
        <section className="reveal">
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Work
          </h2>

          <div className="rounded-[26px] bg-gradient-to-br from-[#6b4bff] via-[#1f67ff] to-[#23d8b9] p-[1px] shadow-[0_18px_60px_rgba(60,40,160,0.22)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(60,40,160,0.3)]">
            <div className="overflow-hidden rounded-[25px] border border-border/20 bg-card">
              <Link to="/projects/leaptra" className="block group">
                <div className="relative aspect-[1.55/1] overflow-hidden bg-[linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--secondary))_100%)]">
                  <img
                    src={workLeaptra}
                    alt="LeapTra AI work section"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
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
        <section className="reveal">
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: "/projects", title: "Projects", desc: "View all work" },
              { to: "/about", title: "About", desc: "My journey" },
              { to: "/toolstack", title: "Tool Stack", desc: "What I use" },
              { to: "/contact", title: "Contact", desc: "Say hello" },
            ].map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group rounded-2xl border border-border bg-card px-4 py-4 transition-all duration-300 ease-out hover:border-foreground/15 hover:bg-secondary hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_hsl(var(--foreground)/0.18)] press animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              >
                <h3 className="text-xs font-medium text-foreground">{card.title}</h3>
                <p className="mt-1 text-[11px] text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-4 reveal">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-4">
              {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="relative text-[11px] text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
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
