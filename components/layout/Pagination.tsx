import Link from 'next/link'

interface PaginationProps {
  current: number
  total?: number
  title: string
  prevHref?: string
  nextHref?: string
}

export default function Pagination({
  current,
  total = 6,
  title,
  prevHref,
  nextHref,
}: PaginationProps) {
  const hasPrev = current > 1 && Boolean(prevHref)
  const hasNext = current < total && Boolean(nextHref)

  return (
    <div className="border-ink-rule text-ink-dark bg-paper-white mt-6 flex w-full items-center justify-between border-t-2 border-b px-2 pt-2 pb-1 font-serif text-xs tracking-widest uppercase select-none">
      <div className="w-1/3 text-left">
        {hasPrev && prevHref ? (
          <Link
            href={prevHref}
            className="text-ink-primary inline-flex items-center space-x-1 font-bold hover:underline"
          >
            <span>« PREVIOUS PAGE</span>
          </Link>
        ) : (
          <span
            className="invisible select-none"
            aria-hidden="true"
          >
            « PREVIOUS PAGE
          </span>
        )}
      </div>

      <div className="text-ink-primary w-1/3 text-center font-bold">
        <span>
          PAGE {current} OF {total} • {title}
        </span>
      </div>

      <div className="w-1/3 text-right">
        {hasNext && nextHref ? (
          <Link
            href={nextHref}
            className="text-ink-primary inline-flex items-center space-x-1 font-bold hover:underline"
          >
            <span>NEXT PAGE »</span>
          </Link>
        ) : (
          <span
            className="invisible select-none"
            aria-hidden="true"
          >
            NEXT PAGE »
          </span>
        )}
      </div>
    </div>
  )
}
