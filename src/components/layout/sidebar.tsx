"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavGroup } from "@/lib/navigation";

type SidebarProps = {
  groups: NavGroup[];
};

export function Sidebar({ groups }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-sidebar-border px-5">
        <Link href="/" className="flex items-baseline gap-0">
          <span className="font-heading text-lg font-bold text-sidebar-foreground">
            Phase2
          </span>
          <span className="font-heading text-lg font-bold text-cyan">_</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {groups.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.title}
            </h3>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-md px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-sidebar-accent font-medium text-cyan"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border px-5 py-3">
        <p className="text-xs text-muted-foreground">
          Phase2_ Design System v0.1
        </p>
      </div>
    </aside>
  );
}
