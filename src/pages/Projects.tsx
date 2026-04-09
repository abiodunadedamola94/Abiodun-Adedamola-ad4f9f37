import { useState } from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "leaptra",
    name: "LeapTra AI",
    role: "Product Designer",
    year: "2025",
    description:
      "A full AI automation platform with a clean, high-clarity website and product interface designed to educate, build trust, and drive conversion with smooth UX and sharp visual hierarchy.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#7b5cff] to-[#4617a9]">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 10L6.5 3.5L10.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "jompal",
    name: "Jompal Handyman Services",
    role: "UX Designer",
    year: "2024",
    description:
      "A seamless on-demand handyman platform connecting homeowners with trusted local service providers through an intuitive and frictionless booking experience.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-[9px] font-bold text-blue-400">
        Z
      </div>
    ),
  },
  {
    id: "ytf",
    name: "Young Titans Foundation",
    role: "Web Designer",
    year: "2025",
    description:
      "A bold, reason-driven website for a youth development foundation—clear storytelling, strong visual identity, and purposeful content structure.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-amber-900/40 bg-amber-950/30 text-[10px] font-semibold text-amber-400">
        ★
      </div>
    ),
  },
  {
    id: "saglev",
    name: "Saglev Electric Vehicle",
    role: "Web Designer",
    year: "2025",
    description:
      "A premium EV landing experience with immersive visuals, refined layout, and an automotive feel inspired by global electric car brands.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-900/40 bg-emerald-950/30 text-[10px] font-semibold text-emerald-400">
        ≋
      </div>
    ),
  },
  {
    id: "dealmate",
    name: "DealMate Escrow System",
    role: "Product Designer",
    year: "2024",
    description:
      "A secure and transparent escrow system designed to protect both buyers and sellers in high-value transactions with a clear, trustworthy interface.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-indigo-900/40 bg-indigo-950/30 text-[11px] font-bold text-indigo-400">
        M
      </div>
    ),
  },
];

const spotlights = [
  {
    id: "leaptra-spotlight",
    title: "LeapTra AI – Product & Website Experience",
    description:
      "Designed a clean, high-clarity website and product interface for an AI automation brand—built to educate, build trust, and drive conversion with smooth UX and sharp visual hierarchy.",
    tag: "AI & AUTOMATION",
    date: "Nov. 2025",
    badge: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#7b5cff] to-[#4617a9]">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 7.5L4.5 2.4L7.5 7.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },
  {
    id: "saglev-spotlight",
    title: "Saglev EV Landing Page",
    description:
      "Crafted a premium EV landing experience with immersive visuals, refined layout, and an automotive feel inspired by global electric car brands.",
    tag: "SAGLEV",
    date: "May. 2025",
    badge: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-emerald-900/40 bg-emerald-950/30 text-[9px] font-semibold text-emerald-400">
        ≋
      </div>
    ),
    tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  {
    id: "ytf-spotlight",
    title: "Young Titans Foundation Website",
    description:
      "A bold, reason-driven website for a youth development foundation—clear storytelling, strong visual identity, and purposeful content structure.",
    tag: "For Good",
    date: "Jan. 2025",
    badge: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-amber-900/40 bg-amber-950/30 text-[9px] font-semibold text-amber-400">
        ★
      </div>
    ),
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Projects List */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground max-w-[500px]">
            Here are a few projects that showcase my work and creativity. While there are many
            more, I've curated a selection to keep this portfolio concise and focused.
          </p>

          <div className="space-y-1.5">
            {projects.map((project) => {
              const isOpen = openId === project.id;
              return (
                <div key={project.id} className="rounded-xl border border-transparent">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : project.id)}
                    className="flex w-full items-center justify-between rounded-xl px-1 py-2.5 text-left transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <span className="text-xs text-foreground/85">{project.name}</span>
                    </div>
                    <ChevronRight
                      size={14}
                      className={`text-muted-foreground/50 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                    />
                  </button>

                  <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden pl-10 pr-2">
                      <p className="max-w-[460px] text-[11px] leading-5 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground/70">
                        <span>{project.role}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Spotlight */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Spotlight
          </h2>

          <div className="space-y-3">
            {spotlights.map((item) => (
              <article
                key={item.id}
                className="rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {item.badge}
                    <h3 className="text-xs font-medium text-foreground">{item.title}</h3>
                  </div>
                  <ArrowUpRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground/50" />
                </div>

                <p className="max-w-[490px] text-[11px] leading-5 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${item.tagClass}`}>
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
