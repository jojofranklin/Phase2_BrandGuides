type UIDemoProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function UIDemo({ title, children, className = "" }: UIDemoProps) {
  return (
    <div className="mb-8">
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          {title}
        </h3>
      )}
      <div
        className={`rounded-xl border border-border bg-card p-6 flex flex-wrap items-center gap-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
