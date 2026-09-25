"use client";

import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";
import { PROFILE } from "@/data/profile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset open state when pathname changes during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("toggle-mobile-nav", { detail: { open: nextState } })
      );
    }
  };

  useEffect(() => {
    const handleNavState = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.open === "boolean") {
        setIsOpen(customEvent.detail.open);
      }
    };
    window.addEventListener("mobile-nav-change", handleNavState);
    return () =>
      window.removeEventListener("mobile-nav-change", handleNavState);
  }, []);

  return (
    <header className="w-full select-none pt-2 pb-1">
      {/* Centered Header Unit: Date & Location on desktop, Hamburger on mobile to the left of the name */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 pb-2 border-b-2 border-ink-rule">
        {/* Desktop Date & Location block directly to the left of the name (hidden on <sm) */}
        <div className="hidden sm:flex flex-col items-end text-right shrink-0 leading-tight">
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

        {/* Mobile Hamburger Button directly in place of Date & Location on <sm */}
        <div className="sm:hidden flex items-center shrink-0">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-1.5 border border-ink-rule bg-paper-card hover:bg-ink-primary hover:text-paper-card transition-colors"
          >
            <Icon
              icon={isOpen ? ICONS.close : ICONS.menu}
              className="w-5 h-5"
            />
          </button>
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
