"use client";

import { usePathname, useRouter } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function DesignSystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isDark, toggle: toggleDark } = useDarkMode();

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
      <Sidebar groups={currentNav?.groups ?? []} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          activeTab={activeTab}
          tabs={navigation.map((t) => ({ id: t.id, label: t.label }))}
          onTabChange={handleTabChange}
          isDark={isDark}
          onToggleDark={toggleDark}
        />
        <main className="flex-1 overflow-y-auto">
          <div className={`mx-auto ${contentMaxWidth} px-8 py-10`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
