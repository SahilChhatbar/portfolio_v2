import React from "react";
import Link from "next/link";
import DropCap from "@/components/ui/DropCap";
import ArticleMeta from "./ArticleMeta";
import ImageFrame from "./ImageFrame";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface ArticleProps {
  kicker?: string;
  headline: string;
  subheadline?: string;
  byline?: string;
  dateline?: string;
  date?: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  primaryLink?: { text: string; href: string; external?: boolean };
  secondaryLink?: { text: string; href: string; external?: boolean };
  className?: string;
}

export default function Article({
  kicker,
  headline,
  subheadline,
  byline = "SAHIL K. CHHATBAR",
  dateline = "AHMEDABAD",
  date,
  paragraphs,
  imageSrc,
  imageAlt,
  tags,
  primaryLink,
  secondaryLink,
  className = "",
}: ArticleProps) {
  const firstParagraph = paragraphs[0] || "";
  const firstLetter = firstParagraph.charAt(0);
  const firstParagraphRest = firstParagraph.slice(1);
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <article className={`space-y-4 ${className}`}>
      {/* Kicker Header */}
      {kicker && (
        <div className="flex items-center space-x-2">
          <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
            {kicker}
          </span>
          <span className="h-px flex-1 bg-ink-rule"></span>
        </div>
      )}

      {/* Main Headline */}
      <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black uppercase text-ink-primary leading-[1.05] tracking-tight">
        {headline}
      </h2>

      {/* Sub-headline */}
      {subheadline && (
        <h3 className="font-serif italic text-base sm:text-lg text-ink-subtle leading-snug border-b border-ink-rule/30 pb-2">
          {subheadline}
        </h3>
      )}

      {/* Byline / Metadata */}
      <ArticleMeta byline={byline} dateline={dateline} date={date} />

      {/* Article Grid: Text & Media */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Main Text Body */}
        <div
          className={`${
            imageSrc ? "md:col-span-7 lg:col-span-8" : "md:col-span-12"
          } space-y-3 font-serif text-sm sm:text-base leading-relaxed text-ink-dark`}
        >
          {/* Lead paragraph with DropCap */}
          {firstParagraph && (
            <p className="newspaper-columns">
              <DropCap letter={firstLetter} />
              {firstParagraphRest}
            </p>
          )}

          {/* Remaining paragraphs */}
          {remainingParagraphs.map((para, index) => (
            <p key={index} className="newspaper-columns">
              {para}
            </p>
          ))}

          {/* Tag Badges */}
          {tags && tags.length > 0 && (
            <div className="pt-3 border-t border-dashed border-ink-rule/30">
              <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1.5">
                TOPICS &amp; TECHNOLOGIES:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          {(primaryLink || secondaryLink) && (
            <div className="pt-3 border-t-2 border-ink-rule flex flex-wrap items-center gap-3">
              {primaryLink &&
                (primaryLink.external ? (
                  <a
                    href={primaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    <span>{primaryLink.text}</span>
                    <Icon icon={ICONS.externalLink} className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={primaryLink.href}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    <span>{primaryLink.text}</span>
                    <Icon icon={ICONS.arrowRight} className="w-3.5 h-3.5" />
                  </Link>
                ))}

              {secondaryLink &&
                (secondaryLink.external ? (
                  <a
                    href={secondaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
                  >
                    <span>{secondaryLink.text}</span>
                    <Icon icon={ICONS.externalLink} className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={secondaryLink.href}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
                  >
                    <span>{secondaryLink.text}</span>
                    <Icon icon={ICONS.arrowRight} className="w-3.5 h-3.5" />
                  </Link>
                ))}
            </div>
          )}
        </div>

        {/* Side / Hero Media Photo Frame */}
        {imageSrc && (
          <div className="md:col-span-5 lg:col-span-4">
            <ImageFrame
              src={imageSrc}
              alt={imageAlt || headline}
              aspectRatio="landscape"
            />
          </div>
        )}
      </div>
    </article>
  );
}
