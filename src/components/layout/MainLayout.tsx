import { useState, ReactNode } from "react";
import { DesktopSidebar } from "@/components/navigation/DesktopSidebar";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";
import { MobileHeader } from "@/components/navigation/MobileHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

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
      
      {/* Main Content */}
      <main className="md:ml-24 pt-16 md:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
