import { Code, Palette, Zap, Terminal, Database, Cloud } from "lucide-react";

const toolCategories = [
  {
    title: "Development",
    icon: Code,
    tools: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "React", description: "Frontend framework" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Next.js", description: "React framework" },
      { name: "Node.js", description: "Backend runtime" },
      { name: "Tailwind CSS", description: "Utility-first CSS" },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    tools: [
      { name: "Figma", description: "UI/UX design" },
      { name: "Framer", description: "Interactive prototypes" },
      { name: "Adobe XD", description: "Design & wireframing" },
      { name: "Photoshop", description: "Image editing" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    tools: [
      { name: "PostgreSQL", description: "Relational database" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "Redis", description: "In-memory cache" },
      { name: "Prisma", description: "ORM" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    tools: [
      { name: "Vercel", description: "Deployment platform" },
      { name: "Docker", description: "Containerization" },
      { name: "GitHub Actions", description: "CI/CD" },
      { name: "AWS", description: "Cloud services" },
    ],
  },
  {
    title: "Productivity",
    icon: Zap,
    tools: [
      { name: "Notion", description: "Notes & docs" },
      { name: "Linear", description: "Project management" },
      { name: "Slack", description: "Communication" },
      { name: "Raycast", description: "Launcher" },
    ],
  },
  {
    title: "Terminal",
    icon: Terminal,
    tools: [
      { name: "iTerm2", description: "Terminal emulator" },
      { name: "Oh My Zsh", description: "Shell framework" },
      { name: "Git", description: "Version control" },
      { name: "pnpm", description: "Package manager" },
    ],
  },
];

export default function Toolstack() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Toolstack</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The tools and technologies I use daily to bring ideas to life.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="rounded-2xl bg-card border border-border p-6 space-y-5 hover:border-primary/30 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-semibold text-lg">{category.title}</h2>
                </div>

                {/* Tools List */}
                <div className="space-y-3">
                  {category.tools.map((tool) => (
                    <div 
                      key={tool.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium text-sm">{tool.name}</span>
                      <span className="text-xs text-muted-foreground">{tool.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
