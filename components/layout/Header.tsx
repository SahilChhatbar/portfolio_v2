import { PROFILE } from "@/data/profile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full select-none pt-2 pb-1">
      {/* Centered Header Unit: Date & Location positioned directly adjacent to the left of the name */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 pb-2 border-b-2 border-ink-rule">
        {/* Date & Location block directly to the left of the name */}
        <div className="flex flex-col items-end text-right shrink-0 leading-tight">
          {/* Day & Date */}
          <div className="space-y-0.5 text-right">
            <div className="font-sans font-black text-[10px] sm:text-xs uppercase tracking-wider text-ink-primary">
              TUESDAY
            </div>
            <div className="font-serif text-[9px] sm:text-[11px] text-ink-dark whitespace-nowrap">
              October 7th, 2003
            </div>
          </div>

          {/* Location & Region */}
          <div className="space-y-0.5 text-right mt-1">
            <div className="font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-primary">
              AHMEDABAD
            </div>
            <div className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wide text-ink-muted whitespace-nowrap">
              GUJARAT, INDIA
            </div>
          </div>
        </div>

        {/* Name Title */}
        <Link
          href="/"
          className="group block transition-opacity hover:opacity-95 text-decoration-none min-w-0"
        >
          <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-none text-ink-primary drop-shadow-xs whitespace-nowrap">
            {PROFILE.name}
          </h1>
        </Link>
      </div>
    </header>
  );
}
