import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

export default function Header() {
  return (
    <header className="w-full pt-2 pb-1 select-none">
      {/* Centered Header Unit: Date & Location on desktop (sm+), hidden on <sm */}
      <div className="border-ink-rule flex items-center justify-center gap-3 border-b-2 pb-2 sm:gap-6">
        {/* Desktop Date & Location block directly to the left of the name (hidden on <sm) */}
        <div className="hidden shrink-0 flex-col items-end text-right leading-tight sm:flex">
          {/* Day & Date */}
          <div className="space-y-0.5 text-right">
            <div className="text-xs-compact text-ink-primary font-sans font-black tracking-wider uppercase sm:text-xs">
              TUESDAY
            </div>
            <div className="text-2xs sm:text-fine text-ink-dark font-serif whitespace-nowrap">
              October 7th, 2003
            </div>
          </div>

          {/* Location & Region */}
          <div className="mt-1 space-y-0.5 text-right">
            <div className="text-2xs sm:text-xs-compact text-ink-primary font-sans font-bold tracking-wider uppercase">
              AHMEDABAD
            </div>
            <div className="text-3xs sm:text-2xs text-ink-muted font-sans tracking-wide whitespace-nowrap uppercase">
              GUJARAT, INDIA
            </div>
          </div>
        </div>

        {/* Name Title */}
        <Link
          href="/"
          className="group text-decoration-none block min-w-0 transition-opacity hover:opacity-95"
        >
          <h1 className="font-headline xs:text-4xl text-ink-primary text-3xl leading-none font-black tracking-tight whitespace-nowrap uppercase drop-shadow-xs sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {SITE_CONFIG.name}
          </h1>
        </Link>
      </div>
    </header>
  )
}
