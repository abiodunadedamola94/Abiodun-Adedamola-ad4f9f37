import { Sparkles, Box, Palette, Zap, Code } from "lucide-react";

const experiments = [
  {
    title: "Interactive Particles",
    description: "Canvas-based particle system that responds to mouse movement",
    icon: Sparkles,
    status: "Live",
  },
  {
    title: "3D Card Hover",
    description: "CSS 3D transforms for immersive card interactions",
    icon: Box,
    status: "Live",
  },
  {
    title: "Color Generator",
    description: "AI-powered color palette generator for designers",
    icon: Palette,
    status: "WIP",
  },
  {
    title: "Micro Animations",
    description: "Collection of reusable micro-interaction animations",
    icon: Zap,
    status: "Live",
  },
  {
    title: "Code Visualizer",
    description: "Visual representation of code execution flow",
    icon: Code,
    status: "WIP",
  },
  {
    title: "Gradient Mesh",
    description: "Dynamic gradient mesh backgrounds generator",
    icon: Palette,
    status: "Live",
  },
];

export default function Playground() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            Creative <span className="gradient-text">Playground</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Experiments, prototypes, and creative coding projects. A space to explore and have fun.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;
            return (
              <div 
                key={index}
                className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* Preview Area */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-5 flex items-center justify-center relative overflow-hidden group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <Icon className="w-12 h-12 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                  
                  {/* Animated dots */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary/30 animate-pulse"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 20}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold group-hover:text-primary transition-colors">
                      {experiment.title}
                    </h3>
                    <span 
                      className={`px-2 py-1 text-xs rounded-full ${
                        experiment.status === "Live" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {experiment.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {experiment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Area */}
        <div className="rounded-2xl bg-card border border-border p-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-xl font-display font-semibold mb-2">More Coming Soon</h2>
          <p className="text-muted-foreground">
            I'm always experimenting with new ideas. Check back for more creative experiments!
          </p>
        </div>
      </div>
    </div>
  );
}
