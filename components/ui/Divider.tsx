interface DividerProps {
  type?: "double" | "single" | "thick" | "ornamental" | "dashed";
  className?: string;
}

export default function Divider({
  type = "single",
  className = "",
}: DividerProps) {
  if (type === "double") {
    return (
      <div className={`w-full py-1.5 my-2 ${className}`}>
        <div className="border-t-3 border-b border-ink-rule h-1.25"></div>
      </div>
    );
  }

  if (type === "thick") {
    return (
      <div className={`w-full my-3 ${className}`}>
        <div className="border-t-4 border-ink-rule"></div>
      </div>
    );
  }

  if (type === "dashed") {
    return (
      <div className={`w-full my-2 border-t border-dashed border-ink-rule/40 ${className}`} />
    );
  }

  if (type === "ornamental") {
    return (
      <div className={`flex items-center justify-center my-4 space-x-3 text-ink-dark select-none ${className}`}>
        <span className="h-px flex-1 bg-ink-rule/30"></span>
        <span className="text-xs font-serif tracking-widest uppercase">✦ ✦ ✦</span>
        <span className="h-px flex-1 bg-ink-rule/30"></span>
      </div>
    );
  }

  // Single hairline rule
  return (
    <div className={`w-full my-2 border-t border-ink-rule/40 ${className}`} />
  );
}
