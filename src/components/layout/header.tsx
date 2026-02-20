"use client";

type HeaderProps = {
  activeTab: string;
  tabs: { id: string; label: string }[];
  onTabChange: (id: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
  onToggleSidebar: () => void;
};

const tabConfig: Record<string, { icon: React.ReactNode; label: string; short: string }> = {
  brand: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    label: "Brand Guides",
    short: "Brand",
  },
  ui: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "UI/UX Library",
    short: "UI/UX",
  },
};

export function Header({
  activeTab,
  tabs,
  onTabChange,
  isDark,
  onToggleDark,
  onToggleSidebar,
}: HeaderProps) {
  return (
    <header className="grid h-14 shrink-0 grid-cols-[auto_1fr_auto] items-center border-b border-border bg-card px-4 md:flex md:justify-between md:px-6">
      {/* Left: hamburger on mobile, static text on desktop */}
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          aria-label="Toggle sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <span className="hidden text-sm text-muted-foreground md:block">
          {tabConfig[activeTab]?.label}
        </span>
      </div>

      {/* Center on mobile, right-side group on desktop */}
      <div className="flex items-center justify-center gap-3 md:justify-end md:flex-1">
        <div className="flex rounded-lg bg-secondary p-1">
          {tabs.map((tab) => {
            const cfg = tabConfig[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-all md:px-3 ${
                  activeTab === tab.id
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cfg?.icon}
                <span className="md:hidden">{cfg?.short}</span>
                <span className="hidden md:inline">{cfg?.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dark mode — desktop only (in this group) */}
        <button
          onClick={onToggleDark}
          className="hidden h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:flex"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <DarkModeIcon isDark={isDark} />
        </button>
      </div>

      {/* Right: dark mode — mobile only */}
      <div className="flex items-center justify-end md:hidden">
        <button
          onClick={onToggleDark}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <DarkModeIcon isDark={isDark} />
        </button>
      </div>
    </header>
  );
}

function DarkModeIcon({ isDark }: { isDark: boolean }) {
  if (isDark) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
