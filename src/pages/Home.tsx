import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Avatar/Photo placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <span className="text-4xl font-display font-bold gradient-text">JD</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Creative Developer & Designer
          </p>
        </div>

        {/* Bio */}
        <p 
          className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          I craft digital experiences that blend beautiful design with clean code. 
          Passionate about creating intuitive interfaces and meaningful interactions.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-border hover:bg-secondary">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-4 pt-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
