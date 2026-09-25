"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "ABOUT ME", href: "/" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "PROJECTS", href: "/projects" },
  { name: "SKILLS", href: "/skills" },
  { name: "CAREER & EDUCATION", href: "/career" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Reset menu open state on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Smoothly collapse menu on outside click or scroll elsewhere
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const activeItem = NAV_ITEMS.find((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );

  return (
    <>
      {/* Desktop Navigation Ribbon (sm+) */}
      <nav className="hidden sm:flex w-full bg-paper-bg my-1 relative z-30 border-b-2 border-t-2 border-ink-rule">
        <div className="flex items-center justify-center flex-1 px-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-nav font-headline font-bold uppercase tracking-[0.14em] transition-all flex items-center justify-center ${
                  isActive
                    ? "bg-ink-primary text-paper-bg"
                    : "text-ink-primary hover:bg-ink-primary/10 hover:text-ink-black"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Pages Navigation (<sm) */}
      <div
        ref={mobileNavRef}
        className="sm:hidden w-full bg-paper-bg my-1 relative z-30 border-b-2 border-t-2 border-ink-rule"
      >
        {/* Toggle Bar */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse pages menu" : "Expand pages menu"}
          className="w-full flex items-center justify-between px-3 py-2 text-xs font-headline font-bold uppercase tracking-[0.14em] text-ink-primary bg-paper-bg hover:bg-ink-primary/5 transition-colors cursor-pointer select-none touch-manipulation"
        >
          <div className="flex items-center space-x-2">
            <span className="font-black">PAGES</span>
            {activeItem && (
              <span className="text-2xs font-mono text-ink-muted border-l border-ink-rule/30 pl-2">
                {activeItem.name}
              </span>
            )}
          </div>

          <span
            className={`inline-block text-[10px] text-ink-primary transition-transform duration-200 ease-out transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>

        {/* Smoothly Collapsible Mobile Page Items */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 border-t border-ink-rule"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="divide-y divide-ink-rule/15 bg-paper-white">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs font-headline font-bold uppercase tracking-wider touch-manipulation transition-colors ${
                      isActive
                        ? "bg-ink-primary text-paper-bg"
                        : "text-ink-primary active:bg-ink-primary/20 hover:bg-ink-primary/10"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="text-xs-compact">●</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
