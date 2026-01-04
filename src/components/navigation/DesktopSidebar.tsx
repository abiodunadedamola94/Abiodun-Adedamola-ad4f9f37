import { useState } from "react";
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
  Mail 
} from "lucide-react";
import { cn } from "@/lib/utils";

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

export function DesktopSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50",
        "flex-col gap-2 p-3 rounded-2xl glass transition-all duration-300 ease-out",
        isExpanded ? "w-48" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
              "hover:bg-secondary group",
              isActive && "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-gradient-to-br from-primary to-accent text-primary-foreground" 
                  : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span
              className={cn(
                "font-medium text-sm whitespace-nowrap transition-all duration-300",
                isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none",
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {item.title}
            </span>
          </NavLink>
        );
      })}
    </aside>
  );
}
