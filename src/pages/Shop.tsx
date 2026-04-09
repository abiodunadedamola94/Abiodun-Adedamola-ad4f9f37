import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Premium UI Kit",
    description: "Complete Figma UI kit with 200+ components for rapid prototyping.",
    price: "$49",
    tag: "FIGMA",
    tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },
  {
    name: "React Template Bundle",
    description: "5 premium React templates with dark mode, responsive layouts, and clean code.",
    price: "$89",
    tag: "REACT",
    tagClass: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  },
  {
    name: "Icon Pack Pro",
    description: "1000+ hand-crafted icons in SVG, PNG, and Figma formats.",
    price: "$29",
    tag: "ICONS",
    tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  {
    name: "Design System Guide",
    description: "Complete eBook on building and scaling design systems for teams.",
    price: "$19",
    tag: "EBOOK",
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-8">
        <section>
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Shop
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground">
            Premium digital products to help you build amazing things.
          </p>

          <div className="space-y-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary cursor-pointer"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xs font-medium text-foreground">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">{product.price}</span>
                    <ArrowUpRight size={14} className="flex-shrink-0 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  </div>
                </div>

                <p className="max-w-[490px] text-[11px] leading-5 text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${product.tagClass}`}>
                    {product.tag}
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
