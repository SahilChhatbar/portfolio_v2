import React from "react";
import Link from "next/link";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface SecondaryArticleProps {
  headline: string;
  subheadline?: string;
  source?: string;
  date?: string;
  summary: string;
  tags?: string[];
  link?: { text: string; href: string; external?: boolean };
  className?: string;
}

export default function SecondaryArticle({
  headline,
  subheadline,
  source,
  date,
  summary,
  tags,
  link,
  className = "",
}: SecondaryArticleProps) {
  return (
    <div className={`p-2 flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider text-ink-muted mb-1">
          {source && <span className="font-bold text-ink-primary">{source}</span>}
          {date && <span>{date}</span>}
        </div>

        <h4 className="font-headline text-lg sm:text-xl font-bold uppercase text-ink-primary leading-tight hover:underline cursor-pointer">
          {link ? (
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
            >
              {headline}
            </Link>
          ) : (
            headline
          )}
        </h4>

        {subheadline && (
          <p className="font-serif italic text-xs text-ink-subtle mt-0.5">
            {subheadline}
          </p>
        )}

        <p className="font-serif text-xs sm:text-sm leading-relaxed text-ink-dark mt-2 newspaper-columns">
          {summary}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] font-sans border border-ink-rule/30 bg-paper-white text-ink-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {link && (
        <div className="mt-3 pt-1.5 border-t border-ink-rule/20">
          <Link
            href={link.href}
            target={link.external ? "_blank" : undefined}
            className="inline-flex items-center space-x-1 text-xs font-sans font-bold uppercase tracking-wider text-ink-primary hover:underline"
          >
            <span>{link.text}</span>
            <Icon icon={link.external ? ICONS.externalLink : ICONS.arrowRight} className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
