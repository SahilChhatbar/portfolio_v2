"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  // Reset menu open state on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <nav className="w-full bg-paper-bg border-b-2 border-t-2 border-ink-rule my-1 relative z-30">
      {/* Desktop Navigation Ribbon */}
      <div className="hidden md:flex items-center justify-between px-2">
        <div className="flex items-center justify-center flex-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-[13px] font-headline font-bold uppercase tracking-[0.14em] transition-all flex items-center justify-center ${
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
      </div>

      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-3 py-2">
        <span className="font-headline font-black text-sm uppercase tracking-wider text-ink-primary">
          NAVIGATION
        </span>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="p-2 border border-ink-rule bg-paper-card active:bg-ink-primary active:text-paper-card hover:bg-ink-primary hover:text-paper-card transition-colors cursor-pointer touch-manipulation flex items-center justify-center select-none"
        >
          {isOpen ? (
            <svg
              className="w-5 h-5 pointer-events-none stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 pointer-events-none stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-ink-rule bg-paper-bg divide-y divide-ink-rule/20">
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
                className={`flex items-center justify-between px-4 py-3 text-xs font-headline font-bold uppercase tracking-wider touch-manipulation ${
                  isActive
                    ? "bg-ink-primary text-paper-bg"
                    : "text-ink-primary active:bg-ink-primary/20 hover:bg-ink-primary/10"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
