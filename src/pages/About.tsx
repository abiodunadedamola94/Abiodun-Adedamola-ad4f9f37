export default function About() {
  const journey = [
    {
      title: "Foundations in Operations & Systems Thinking",
      period: "2018 - 2021",
      description:
        "I started my career in operations, where my go-to wasn't just to 'get things done,' but to make sure things worked consistently, efficiently, and at scale. I soon found myself fine-tuning service workflows, monitoring trends and processes, and asking one burning question: why does it feel hard to fix this — could that period trained me to think in systems.",
    },
    {
      title: "Transition into Product Design",
      period: "2021 - 2023",
      description:
        "My curiosity about how systems relate naturally pulled me into product design. I started to shape experiences, not just react to them. I began learning UI/UX, product thinking, and user-centered design — connecting operational pain points to real digital solutions.",
    },
    {
      title: "Building Real Products, Not Just Screens",
      period: "2023",
      description:
        "I evolved as a product designer, this time focused on real-world impact. I went beyond creating user-centered products that aligned with key expectations and business needs. My contributions include designing comprehensive UX and usable, interactive flows.",
    },
    {
      title: "Innovating and Leading",
      period: "2024 - 2025",
      description:
        "I collaborate with multidisciplinary teams to design AI-powered products and web experiences. My recent solutions include designing LearTra AI, a workflow automation concept, contributing to Learning platforms, and designing the service and web for a vehicle car-tech product.",
    },
    {
      title: "Continuous Evolution",
      period: "2025",
      description:
        "Today, I continue to grow as a professional designer, embracing new challenges and exploring advanced design systems and AI-driven products. My commitment to creating meaningful, user-centered design remains at the core of my creative journey towards the future of design.",
    },
  ];

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">
        {/* Header */}
        <section>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Hi 👋 I'm Adedamola and I like building my ideas.
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">Currently at LeapTra</p>
        </section>

        {/* Photo Grid Placeholder */}
        <section>
          <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[16/9] flex items-center justify-center">
            <span className="text-muted-foreground/30 text-sm">Photo placeholder</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border bg-card aspect-square flex items-center justify-center">
                <span className="text-muted-foreground/30 text-[10px]">Photo {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* My Journey */}
        <section>
          <h2 className="mb-2 text-[15px] font-semibold tracking-tight text-foreground">
            My Journey
          </h2>
          <p className="mb-8 text-xs leading-5 text-muted-foreground">
            This is a glimpse into my path — from working behind the scenes in operations to
            designing products, systems, and AI-powered experiences used by real businesses.
            It's a story of curiosity, problem-solving, and continuous evolution.
          </p>

          <div className="space-y-10">
            {journey.map((item) => (
              <div key={item.title}>
                <h3 className="text-[13px] font-semibold text-foreground">{item.title}</h3>
                <p className="mt-0.5 text-[10px] text-[#7b5cff]">{item.period}</p>
                
                {/* Image placeholders */}
                <div className="grid grid-cols-2 gap-3 mt-3 mb-3">
                  <div className="rounded-xl border border-border bg-card aspect-[4/3] flex items-center justify-center">
                    <span className="text-muted-foreground/20 text-[10px]">Image</span>
                  </div>
                  <div className="rounded-xl border border-border bg-card aspect-[4/3] flex items-center justify-center">
                    <span className="text-muted-foreground/20 text-[10px]">Image</span>
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
