"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function DesignSystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on route change (mobile nav)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const activeTab = pathname.startsWith("/ui") ? "ui" : "brand";
  const currentNav = navigation.find((t) => t.id === activeTab);

  // Brand guides get more room, UI library gets tighter docs-style width
  const contentMaxWidth = activeTab === "brand" ? "max-w-5xl" : "max-w-4xl";

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    const tab = navigation.find((t) => t.id === tabId);
    const firstPage = tab?.groups[0]?.items[0]?.href;
    if (firstPage) {
      router.push(firstPage);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        groups={currentNav?.groups ?? []}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          activeTab={activeTab}
          tabs={navigation.map((t) => ({ id: t.id, label: t.label }))}
          onTabChange={handleTabChange}
          isDark={isDark}
          onToggleDark={toggleDark}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
        />
        <main className="flex-1 overflow-y-auto">
          <div className={`mx-auto ${contentMaxWidth} px-4 py-6 md:px-8 md:py-10`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
