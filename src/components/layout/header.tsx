"use client";

type HeaderProps = {
  activeTab: string;
  tabs: { id: string; label: string }[];
  onTabChange: (id: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
};

export function Header({
  activeTab,
  tabs,
  onTabChange,
  isDark,
  onToggleDark,
}: HeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card px-6">
      {/* Left: breadcrumb area */}
      <div className="text-sm text-muted-foreground">
        {activeTab === "brand" ? "_BrandGuidelines" : "_UI/UX Library"}
      </div>

      {/* Right: tab toggle + dark mode */}
      <div className="flex items-center gap-3">
        {/* Tab Toggle */}
        <div className="flex rounded-lg bg-secondary p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDark}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            // Sun icon
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
          ) : (
            // Moon icon
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
