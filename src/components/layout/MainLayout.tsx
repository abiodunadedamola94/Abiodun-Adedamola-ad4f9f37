import { useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DesktopSidebar } from "@/components/navigation/DesktopSidebar";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const location = useLocation();
  useScrollReveal(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <MobileHeader onMenuClick={() => setIsMobileDrawerOpen(true)} />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Floating theme toggle (desktop) */}
      <div className="hidden md:block fixed top-5 right-5 z-50 animate-fade-in">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main
        key={location.pathname}
        className="md:ml-24 pt-16 md:pt-0 min-h-screen animate-fade-in"
      >
        {children}
      </main>
    </div>
  );
}
