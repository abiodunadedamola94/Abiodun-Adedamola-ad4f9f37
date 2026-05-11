import { ArrowUpRight } from "lucide-react";
import InvoiceBuilder from "@/components/invoice/InvoiceBuilder";

const experiments = [
  {
    title: "Interactive Particles",
    description: "Canvas-based particle system that responds to mouse movement and touch gestures.",
    tag: "CANVAS",
    status: "Live",
    tagClass: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  },
  {
    title: "3D Card Hover",
    description: "CSS 3D transforms for immersive card interactions with perspective depth.",
    tag: "CSS",
    status: "Live",
    tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },
  {
    title: "Color Generator",
    description: "AI-powered color palette generator for designers and developers.",
    tag: "AI",
    status: "WIP",
    tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "Micro Animations",
    description: "Collection of reusable micro-interaction animations for web interfaces.",
    tag: "MOTION",
    status: "Live",
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Gradient Mesh",
    description: "Dynamic gradient mesh backgrounds generator with export options.",
    tag: "GENERATIVE",
    status: "Live",
    tagClass: "border-rose-500/20 bg-rose-500/10 text-rose-300",
  },
];

export default function Playground() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto space-y-12">
        <section className="max-w-[560px]">
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Playground
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground">
            Experiments, prototypes, and creative coding projects.
          </p>

          <div className="space-y-3">
            {experiments.map((exp) => (
              <article
                key={exp.title}
                className="group rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary cursor-pointer"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xs font-medium text-foreground">{exp.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] ${
                      exp.status === "Live"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                </div>

                <p className="max-w-[490px] text-[11px] leading-5 text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${exp.tagClass}`}>
                    {exp.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
