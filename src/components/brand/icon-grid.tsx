"use client";

import { useState } from "react";

type IconItem = {
  name: string;
  file: string;
  category: "process" | "values" | "capabilities";
};

const icons: IconItem[] = [
  // Process
  { name: "Discover", file: "discover.svg", category: "process" },
  { name: "Design", file: "design.svg", category: "process" },
  { name: "Develop", file: "develop.svg", category: "process" },
  { name: "Deploy", file: "deploy.svg", category: "process" },
  { name: "Direct", file: "direct.svg", category: "process" },
  // Values
  { name: "Have Grit", file: "have-grit.svg", category: "values" },
  { name: "Be a Leader", file: "be-a-leader.svg", category: "values" },
  { name: "Be an Adult", file: "be-an-adult.svg", category: "values" },
  { name: "Give a Sh*t", file: "give-a-shit.svg", category: "values" },
  { name: "Focus On Service", file: "focus-on-service.svg", category: "values" },
  // Capabilities
  { name: "Dev Ops", file: "dev-ops.svg", category: "capabilities" },
  { name: "AI Solutions", file: "ai-solutions.svg", category: "capabilities" },
  { name: "Solutions Consulting", file: "solutions-consulting.svg", category: "capabilities" },
  { name: "UI/UX Prototyping", file: "ui-ux-prototyping.svg", category: "capabilities" },
  { name: "Digital Transformation", file: "digital-transformation.svg", category: "capabilities" },
  { name: "Systems Architecture", file: "systems-architecture.svg", category: "capabilities" },
  { name: "Mobile & Web Solutions", file: "mobile-web-solutions.svg", category: "capabilities" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "process", label: "Process" },
  { key: "values", label: "Values" },
  { key: "capabilities", label: "Capabilities" },
] as const;

function downloadSvg(file: string, name: string) {
  const link = document.createElement("a");
  link.href = `/icons/${file}`;
  link.download = `Phase2_Icon_${name.replace(/[^a-zA-Z0-9]/g, "_")}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadAll() {
  icons.forEach((icon, i) => {
    setTimeout(() => downloadSvg(icon.file, icon.name), i * 150);
  });
}

export function IconGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const filtered =
    filter === "all" ? icons : icons.filter((i) => i.category === filter);

  return (
    <div>
      {/* Filter bar + download all */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex rounded-lg bg-secondary p-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                filter === cat.key
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <button
          onClick={downloadAll}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download All SVGs
        </button>
      </div>

      {/* Icon grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {filtered.map((icon) => (
          <button
            key={icon.file}
            onClick={() => downloadSvg(icon.file, icon.name)}
            onMouseEnter={() => setHoveredIcon(icon.file)}
            onMouseLeave={() => setHoveredIcon(null)}
            className="group relative flex flex-col items-center rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-cyan/40"
          >
            {/* Download indicator */}
            <div
              className={`absolute top-2 right-2 rounded-md p-1 transition-opacity ${
                hoveredIcon === icon.file ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 mb-3 transition-transform group-hover:scale-110">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/icons/${icon.file}`}
                alt={icon.name}
                className="w-full h-full"
              />
            </div>

            {/* Label */}
            <p className="text-[11px] font-medium text-foreground text-center leading-tight">
              {icon.name}
            </p>
            <p className="mt-1 text-[9px] text-muted-foreground uppercase tracking-wider">
              {icon.category}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
