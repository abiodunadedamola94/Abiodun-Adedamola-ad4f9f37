import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const spotlights = [
  {
    id: "leaptra",
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
    id: "saglev",
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
    id: "ytf",
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
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Projects List */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground max-w-[500px]">
            Here are a few projects that showcase my work and creativity. Click any project to
            open the full case study.
          </p>

          <div className="space-y-1.5">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex w-full items-center justify-between rounded-xl px-1 py-2.5 text-left transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  {project.icon}
                  <span className="text-xs text-foreground/85 group-hover:text-foreground">{project.name}</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Spotlight */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Spotlight
          </h2>

          <div className="space-y-3">
            {spotlights.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className="block rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary"
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
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
