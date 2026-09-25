import Link from "next/link";

interface PaginationProps {
  current: number;
  total?: number;
  title: string;
  prevHref?: string;
  nextHref?: string;
}

export default function Pagination({
  current,
  total = 6,
  title,
  prevHref,
  nextHref,
}: PaginationProps) {
  const hasPrev = current > 1 && Boolean(prevHref);
  const hasNext = current < total && Boolean(nextHref);

  return (
    <div className="w-full mt-6 pt-2 pb-1 border-t-2 border-b border-ink-rule flex items-center justify-between text-xs font-serif uppercase tracking-widest text-ink-dark select-none bg-paper-white px-2">
      <div className="w-1/3 text-left">
        {hasPrev && prevHref ? (
          <Link
            href={prevHref}
            className="hover:underline font-bold text-ink-primary inline-flex items-center space-x-1"
          >
            <span>« PREVIOUS PAGE</span>
          </Link>
        ) : (
          <span className="invisible select-none" aria-hidden="true">
            « PREVIOUS PAGE
          </span>
        )}
      </div>

      <div className="w-1/3 text-center font-bold text-ink-primary">
        <span>
          PAGE {current} OF {total} • {title}
        </span>
      </div>

      <div className="w-1/3 text-right">
        {hasNext && nextHref ? (
          <Link
            href={nextHref}
            className="hover:underline font-bold text-ink-primary inline-flex items-center space-x-1"
          >
            <span>NEXT PAGE »</span>
          </Link>
        ) : (
          <span className="invisible select-none" aria-hidden="true">
            NEXT PAGE »
          </span>
        )}
      </div>
    </div>
  );
}
