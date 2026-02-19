"use client";

import { useState } from "react";

const scaleSteps = [
  { name: "Display", size: "text-7xl", px: "72px", use: "Hero moments, splash screens", font: "font-heading" },
  { name: "H1", size: "text-5xl", px: "48px", use: "Page titles", font: "font-heading" },
  { name: "H2", size: "text-4xl", px: "36px", use: "Major section headers", font: "font-heading" },
  { name: "H3", size: "text-3xl", px: "30px", use: "Sub-section headers", font: "font-heading" },
  { name: "H4", size: "text-2xl", px: "24px", use: "Card titles, labels", font: "font-heading" },
  { name: "H5", size: "text-xl", px: "20px", use: "Small headings", font: "font-heading" },
  { name: "Body Large", size: "text-lg", px: "18px", use: "Lead paragraphs", font: "font-sans" },
  { name: "Body", size: "text-base", px: "16px", use: "Default body copy", font: "font-sans" },
  { name: "Small", size: "text-sm", px: "14px", use: "UI labels, metadata", font: "font-sans" },
  { name: "XS", size: "text-xs", px: "12px", use: "Captions, badges", font: "font-sans" },
];

export function TypeScale() {
  const [sampleText, setSampleText] = useState("Phase2_ Design System");

  return (
    <div>
      {/* Editable sample text */}
      <div className="mb-8">
        <label className="block text-xs text-muted-foreground mb-2">
          Preview text — type anything
        </label>
        <input
          type="text"
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyan/50"
        />
      </div>

      {/* Scale */}
      <div className="space-y-0">
        {scaleSteps.map((step) => (
          <div
            key={step.name}
            className="group flex items-baseline gap-6 border-t border-border py-5"
          >
            {/* Meta — fixed width */}
            <div className="w-28 shrink-0">
              <p className="text-xs font-semibold text-foreground">{step.name}</p>
              <p className="text-[10px] text-muted-foreground font-mono">{step.px}</p>
            </div>

            {/* Specimen */}
            <p
              className={`${step.size} ${step.font} font-medium tracking-tight leading-none text-foreground truncate`}
            >
              {sampleText || "Phase2_"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
