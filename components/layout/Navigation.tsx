"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  // Reset open state when pathname changes during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.open === "boolean") {
        setIsOpen(customEvent.detail.open);
      } else {
        setIsOpen((prev) => {
          const next = !prev;
          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("mobile-nav-change", { detail: { open: next } })
            );
          }
          return next;
        });
      }
    };

    window.addEventListener("toggle-mobile-nav", handleToggle);
    return () => window.removeEventListener("toggle-mobile-nav", handleToggle);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("mobile-nav-change", { detail: { open: false } })
      );
    }
  };

  return (
    <nav className="w-full bg-paper-bg my-1 relative z-30">
      {/* Desktop Navigation Ribbon (sm+) */}
      <div className="hidden sm:flex items-center justify-between px-2 border-b-2 border-t-2 border-ink-rule">
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

      {/* Mobile Drawer Menu (<sm) */}
      {isOpen && (
        <div className="sm:hidden border-b-2 border-ink-rule bg-paper-bg divide-y divide-ink-rule/20">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-2.5 text-xs font-headline font-bold uppercase tracking-wider ${
                  isActive
                    ? "bg-ink-primary text-paper-bg"
                    : "text-ink-primary hover:bg-ink-primary/10"
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
