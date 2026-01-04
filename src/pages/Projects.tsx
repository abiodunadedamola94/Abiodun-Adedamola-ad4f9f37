import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and seamless checkout experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: null,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop interface and team collaboration features.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: null,
  },
  {
    title: "Design System",
    description: "Comprehensive component library with documentation, accessibility features, and theming support.",
    tags: ["React", "Storybook", "Tailwind CSS", "Figma"],
    image: null,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and natural language processing capabilities.",
    tags: ["Python", "FastAPI", "OpenAI", "WebSocket"],
    image: null,
  },
  {
    title: "Portfolio Template",
    description: "Modern and customizable portfolio template for developers and designers.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: null,
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time metrics and customizable widgets.",
    tags: ["React", "D3.js", "GraphQL", "Chart.js"],
    image: null,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects I've worked on, ranging from web applications to design systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-muted-foreground/30">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
