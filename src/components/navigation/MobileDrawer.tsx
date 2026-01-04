import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  FolderOpen, 
  Wrench, 
  BookOpen, 
  ShoppingBag, 
  Music, 
  Sparkles, 
  Mail,
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "About", path: "/about", icon: User },
  { title: "Projects", path: "/projects", icon: FolderOpen },
  { title: "Toolstack", path: "/toolstack", icon: Wrench },
  { title: "Blogs", path: "/blogs", icon: BookOpen },
  { title: "Shop", path: "/shop", icon: ShoppingBag },
  { title: "Songs", path: "/songs", icon: Music },
  { title: "Playground", path: "/playground", icon: Sparkles },
  { title: "Contact", path: "/contact", icon: Mail },
];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const location = useLocation();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-72 bg-sidebar border-sidebar-border p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-left font-display text-xl gradient-text">
            Portfolio
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200",
                  "active:scale-[0.98]",
                  isActive 
                    ? "bg-gradient-to-r from-primary/20 to-accent/20" 
                    : "hover:bg-secondary"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground" 
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    "font-medium",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
