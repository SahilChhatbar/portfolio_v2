import React from "react";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface ClassifiedBoxProps {
  title?: string;
  badge?: string;
  children: React.ReactNode;
  action?: {
    text: string;
    href: string;
    external?: boolean;
    icon?: string;
  };
  variant?: "boxed" | "dark" | "dashed" | "ad";
  className?: string;
}

export default function ClassifiedBox({
  title = "PUBLIC NOTICE / TELEGRAPH",
  badge,
  children,
  action,
  variant = "boxed",
  className = "",
}: ClassifiedBoxProps) {
  if (variant === "dark") {
    return (
      <div className={`p-4 bg-ink-black text-paper-bg border-2 border-ink-rule ${className}`}>
        {badge && (
          <span className="bg-paper-bg text-ink-primary px-1.5 py-0.5 text-[9px] font-sans font-bold uppercase tracking-widest inline-block mb-2">
            {badge}
          </span>
        )}
        {title && (
          <h4 className="font-headline text-lg uppercase font-bold text-paper-bg tracking-wide mb-2">
            {title}
          </h4>
        )}
        <div className="font-serif text-xs sm:text-sm leading-relaxed text-neutral-300">
          {children}
        </div>
        {action && (
          <div className="mt-3 pt-2 border-t border-neutral-700">
            <Link
              href={action.href}
              target={action.external ? "_blank" : undefined}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-paper-bg text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              <span>{action.text}</span>
              <Icon icon={action.icon || ICONS.arrowRight} className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`p-3 sm:p-4 border-2 border-ink-rule bg-paper-white relative ${
        variant === "dashed" ? "border-dashed" : "border-solid"
      } ${className}`}
    >
      {/* Corner decorative print marks */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-ink-rule" />
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-ink-rule" />
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-ink-rule" />
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-ink-rule" />

      <div className="flex items-center justify-between border-b border-ink-rule pb-1.5 mb-2.5">
        <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-ink-primary">
          {title}
        </h4>
        {badge && (
          <span className="bg-ink-primary text-paper-card px-1.5 py-0.5 text-[9px] font-sans font-bold uppercase tracking-widest">
            {badge}
          </span>
        )}
      </div>

      <div className="font-serif text-xs sm:text-sm leading-relaxed text-ink-dark">
        {children}
      </div>

      {action && (
        <div className="mt-3 pt-2 border-t border-ink-rule/30 flex justify-end">
          <Link
            href={action.href}
            target={action.external ? "_blank" : undefined}
            className="inline-flex items-center space-x-1 text-xs font-sans font-bold uppercase tracking-wider text-ink-primary hover:underline"
          >
            <span>{action.text}</span>
            <Icon icon={action.icon || ICONS.arrowRight} className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
