import React from "react";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface CardProps {
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

export default function Card({
  title,
  badge,
  children,
  action,
  variant = "boxed",
  className = "",
}: CardProps) {
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
            {action.external ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-headline font-bold uppercase tracking-wider text-paper-bg hover:underline"
              >
                <span>{action.text}</span>
                <Icon icon={action.icon || ICONS.arrowRight} className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                href={action.href}
                className="inline-flex items-center space-x-1 text-xs font-headline font-bold uppercase tracking-wider text-paper-bg hover:underline"
              >
                <span>{action.text}</span>
                <Icon icon={action.icon || ICONS.arrowRight} className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }

  const borderClass =
    variant === "dashed"
      ? "border-2 border-dashed border-ink-rule"
      : "border-2 border-ink-rule";

  return (
    <div
      className={`p-3 sm:p-4 bg-paper-card ${borderClass} shadow-2xs ${className}`}
    >
      <div className="flex items-center justify-between border-b border-ink-rule pb-1.5 mb-2">
        {title && (
          <h4 className="font-headline font-bold text-sm uppercase text-ink-primary tracking-wide">
            {title}
          </h4>
        )}
        {badge && (
          <span className="bg-ink-primary text-paper-card px-1.5 py-0.5 text-[9px] font-sans font-bold uppercase tracking-widest">
            {badge}
          </span>
        )}
      </div>

      <div className="font-serif text-xs leading-relaxed text-ink-dark">
        {children}
      </div>

      {action && (
        <div className="mt-3 pt-2 border-t border-dashed border-ink-rule/30 flex justify-end">
          {action.external ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-1 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>{action.text}</span>
              <Icon icon={action.icon || ICONS.externalLink} className="w-3 h-3" />
            </a>
          ) : (
            <Link
              href={action.href}
              className="inline-flex items-center space-x-1 px-3 py-1 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>{action.text}</span>
              <Icon icon={action.icon || ICONS.arrowRight} className="w-3 h-3" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
