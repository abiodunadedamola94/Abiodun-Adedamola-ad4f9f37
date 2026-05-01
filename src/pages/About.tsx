import aboutHero from "@/assets/about-hero.webp";
import aboutGrid1 from "@/assets/about-grid-1.jpg";
import aboutGrid3 from "@/assets/about-grid-3.jpg";
import portrait from "@/assets/profile-avatar.jpg";
import journeyOps1 from "@/assets/journey-ops-1.jpg";
import journeyOps2 from "@/assets/journey-ops-2.jpg";
import journeyDesign1 from "@/assets/journey-design-1.jpg";
import journeyDesign2 from "@/assets/journey-design-2.jpg";
import journeyProducts1 from "@/assets/journey-products-1.jpg";
import journeyProducts2 from "@/assets/journey-products-2.jpg";
import journeyLead1 from "@/assets/journey-lead-1.jpg";
import journeyLead2 from "@/assets/journey-lead-2.jpg";

export default function About() {
  const journey = [
    {
      title: "Foundations in Operations & Systems Thinking",
      period: "2018 - 2021",
      description:
        "I started my career in operations, where my instinct wasn't just to 'get things done,' but to make things work consistently, efficiently, and at scale. I fine-tuned service workflows, monitored trends, and kept asking one question: why does this feel hard to fix? That period trained me to think in systems.",
      images: [journeyOps1, journeyOps2],
    },
    {
      title: "Transition into Product Design",
      period: "2021 - 2023",
      description:
        "Curiosity about how systems connect pulled me into product design. I started shaping experiences, not just reacting to them — learning UI/UX, product thinking, and user-centered design while connecting operational pain points to real digital solutions.",
      images: [journeyDesign1, journeyDesign2],
    },
    {
      title: "Building Real Products, Not Just Screens",
      period: "2023",
      description:
        "I evolved as a product designer focused on real-world impact — moving past pretty screens to user-centered products aligned with key business outcomes. I owned end-to-end UX, interactive flows, and design systems that scaled.",
      images: [journeyProducts1, journeyProducts2],
    },
    {
      title: "Designing with AI & Vibe Coding",
      period: "2024 - 2025",
      description:
        "I now collaborate with multidisciplinary teams to design AI-powered products and ship full web experiences using vibe-coding tools — Lovable, Claude, Antigravity, Google Stitch, Trae AI, and VS Code. From LeapTra AI to learning platforms and a vehicle car-tech product, I bridge design and code so ideas reach users faster.",
      images: [journeyLead1, journeyLead2],
    },
    {
      title: "Designer, Strategist, Future School Owner",
      period: "2025 →",
      description:
        "Beyond product design, I work across product motion (Figma), editorial storytelling, and branding. I'm also building a School Management System on Lovable for my mom's school — positioning myself as a product strategist who can scale education the same way I scale products. Design, systems, AI, and strategy: one operating system for everything I touch.",
      images: [],
    },
  ];

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">
        {/* Header */}
        <section className="reveal">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Hi 👋 I'm Adedamola — Product Designer, AI Vibe Coder & Strategist.
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Currently designing at LeapTra · Building a School Management System on Lovable
          </p>
        </section>

        {/* Photo Grid */}
        <section className="reveal">
          <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[16/9]">
            <img src={aboutHero} alt="Adedamola speaking at a tech conference" className="w-full h-full object-cover" width={960} height={540} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="group rounded-xl overflow-hidden border border-border bg-card aspect-square">
              <img
                src={portrait}
                alt="Adedamola portrait"
                className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-card aspect-square">
              <img src={aboutGrid1} alt="ADE branded portrait" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-card aspect-square">
              <img src={aboutGrid3} alt="Casual street style" className="w-full h-full object-cover object-top" loading="lazy" width={512} height={512} />
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="reveal space-y-4">
          <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
            What I actually do
          </h2>
          <p className="text-xs leading-5 text-muted-foreground">
            I'm a product designer who thinks like an operator and ships like an engineer. My work sits at the
            crossroads of <span className="text-foreground">product design</span>,{" "}
            <span className="text-foreground">AI vibe coding</span>, and{" "}
            <span className="text-foreground">brand storytelling</span> — turning fuzzy ideas into clean,
            usable, production-ready experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              {
                title: "Product & UX Design",
                body: "End-to-end UI/UX for AI products, SaaS, and mobile — research, flows, design systems, and high-fidelity prototypes in Figma.",
              },
              {
                title: "AI Vibe Coding",
                body: "I build real, shipped products using Lovable, Claude, Antigravity, Google Stitch, Trae AI, and VS Code — design and ship in the same loop.",
              },
              {
                title: "Product Motion (Figma)",
                body: "Micro-interactions, prototypes, and motion that make products feel alive and easier to understand.",
              },
              {
                title: "Editorial & Branding",
                body: "Storytelling-led editorial design and brand systems — identity, type, and visual language that earns attention.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_hsl(var(--foreground)/0.18)]"
              >
                <h3 className="text-[13px] font-semibold text-foreground">{card.title}</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy / Education */}
        <section className="reveal">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--accent-purple))]">
              The long game
            </p>
            <h2 className="mt-2 text-[15px] font-semibold tracking-tight text-foreground">
              Designing for products today, scaling education tomorrow.
            </h2>
            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
              My mom owns a school, and I'm positioning myself as a product strategist who can help it scale —
              starting with a School Management System I'm building on Lovable. Same mindset I bring to
              startups: clear systems, clean UX, and AI where it actually helps. Someday-school-owner energy,
              shipped one product at a time.
            </p>
          </div>
        </section>

        {/* My Journey */}
        <section className="reveal">
          <h2 className="mb-2 text-[15px] font-semibold tracking-tight text-foreground">
            My Journey
          </h2>
          <p className="mb-8 text-xs leading-5 text-muted-foreground">
            From operations to product design to AI-native building — a story of curiosity, systems thinking,
            and continuous evolution.
          </p>

          <div className="space-y-10">
            {journey.map((item) => (
              <div key={item.title} className="reveal">
                <h3 className="text-[13px] font-semibold text-foreground">{item.title}</h3>
                <p className="mt-0.5 text-[10px] text-[hsl(var(--accent-purple))]">{item.period}</p>

                {item.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-3 mb-3">
                    {item.images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-border bg-card aspect-[4/3]">
                        <img src={img} alt={`${item.title} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={768} height={576} />
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-[11px] leading-5 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/official_damoskylala?igsh=MTh3dDFkN2RqaWhxZA%3D%3D&utm_source=qr" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/abiodun-adedamola-605398289?trk=contact-info" },
                { label: "Twitter", href: "#" },
                { label: "YouTube", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/60">Adedamola Ade — Product Designer & Strategist</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
