"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface NavItem {
  name: string;
  href: string;
  editionNumber: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "ABOUT ME", href: "/", editionNumber: "P. 1" },
  { name: "EXPERIENCE", href: "/experience", editionNumber: "P. 2" },
  { name: "PROJECTS", href: "/projects", editionNumber: "P. 3" },
  { name: "SKILLS", href: "/skills", editionNumber: "P. 4" },
  { name: "CAREER & EDUCATION", href: "/career", editionNumber: "P. 5" },
  { name: "CONTACT", href: "/contact", editionNumber: "P. 6" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-paper-white border-b-2 border-t-2 border-ink-rule my-1 relative z-30">
      {/* Desktop Navigation Ribbon */}
      <div className="hidden md:flex items-center justify-between px-2">
        <div className="flex items-center justify-center flex-1 divide-x divide-ink-rule/30">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-[13px] font-headline font-bold uppercase tracking-[0.14em] transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? "bg-ink-primary text-paper-bg"
                    : "text-ink-primary hover:bg-ink-primary/10 hover:text-ink-black"
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`text-[9px] font-sans font-normal opacity-70 ${
                    isActive ? "text-paper-bg" : "text-ink-muted"
                  }`}
                >
                  [{item.editionNumber}]
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-3 py-2">
        <div className="flex items-center space-x-2">
          <span className="font-headline font-black text-sm uppercase tracking-wider text-ink-primary">
            SECTIONS DIRECTORY
          </span>
          <span className="text-[10px] font-sans text-neutral-600">
            [6 PAGES]
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="p-1 border border-ink-rule bg-paper-card hover:bg-ink-primary hover:text-paper-card transition-colors"
        >
          <Icon
            icon={isOpen ? ICONS.close : ICONS.menu}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-ink-rule bg-paper-white divide-y divide-ink-rule/20">
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
                className={`flex items-center justify-between px-4 py-2.5 text-xs font-headline font-bold uppercase tracking-wider ${
                  isActive
                    ? "bg-ink-primary text-paper-bg"
                    : "text-ink-primary hover:bg-ink-primary/10"
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] font-sans opacity-70">
                  {item.editionNumber}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
