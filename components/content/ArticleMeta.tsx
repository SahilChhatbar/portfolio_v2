interface ArticleMetaProps {
  byline?: string;
  dateline?: string;
  category?: string;
  date?: string;
  className?: string;
}

export default function ArticleMeta({
  byline = "SAHIL K. CHHATBAR",
  dateline = "AHMEDABAD",
  category,
  date,
  className = "",
}: ArticleMetaProps) {
  return (
    <div
      className={`my-1.5 py-1 border-t border-b border-ink-rule/20 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-ink-subtle ${className}`}
    >
      <div className="flex items-center space-x-2">
        <span className="font-bold text-ink-primary">BY {byline}</span>
        {dateline && (
          <>
            <span className="text-neutral-400">•</span>
            <span className="font-semibold text-ink-dark">{dateline}</span>
          </>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {category && (
          <span className="font-semibold px-1 bg-ink-primary/10 text-ink-primary">
            {category}
          </span>
        )}
        {date && (
          <>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-600">{date}</span>
          </>
        )}
      </div>
    </div>
  );
}
