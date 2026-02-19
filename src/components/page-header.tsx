type PageHeaderProps = {
  title: string;
  description: string;
  status?: "ready" | "in-progress" | "planned";
};

const statusLabels = {
  ready: { text: "Ready", className: "bg-pine/10 text-pine" },
  "in-progress": { text: "In Progress", className: "bg-cyan/10 text-cyan" },
  planned: { text: "Planned", className: "bg-muted text-muted-foreground" },
};

export function PageHeader({ title, description, status = "ready" }: PageHeaderProps) {
  const badge = statusLabels[status];
  return (
    <div className="mb-14">
      <div className="mb-1 flex items-center gap-3">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${badge.className}`}
        >
          {badge.text}
        </span>
      </div>
      <h1 className="font-heading text-5xl font-bold tracking-tight leading-[1.1]">
        {title}
      </h1>
      <p className="mt-4 text-xl leading-relaxed text-muted-foreground max-w-2xl">
        {description}
      </p>
    </div>
  );
}
