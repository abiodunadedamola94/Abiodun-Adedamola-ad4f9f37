import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="flex items-center justify-between px-4 h-16">
        <h1 className="font-display font-semibold text-lg gradient-text">
          Portfolio
        </h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="hover:bg-secondary"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
