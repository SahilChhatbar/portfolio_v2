import React from "react";
import Link from "next/link";
import DropCap from "@/components/ui/DropCap";
import ImageFrame from "./ImageFrame";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface ArticleProps {
  kicker?: string;
  headline: string;
  subheadline?: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageObjectFit?: "cover" | "contain";
  tags?: string[];
  primaryLink?: { text: string; href: string; external?: boolean };
  secondaryLink?: { text: string; href: string; external?: boolean };
  className?: string;
}

export default function Article({
  kicker,
  headline,
  subheadline,
  paragraphs,
  imageSrc,
  imageAlt,
  imageObjectFit = "contain",
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
          <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest">
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

      {/* Article Body with Floated Media for Editorial Wrap */}
      <div className="flow-root font-serif text-sm sm:text-base leading-relaxed text-ink-dark">
        {/* Floated Image Frame */}
        {imageSrc && (
          <div className="w-full md:float-right md:w-[48%] md:ml-6 md:mb-4 mb-4">
            <ImageFrame
              src={imageSrc}
              alt={imageAlt || headline}
              aspectRatio="landscape"
              objectFit={imageObjectFit}
            />
          </div>
        )}

        {/* Lead paragraph with DropCap */}
        {firstParagraph && (
          <p className="newspaper-columns mb-3">
            <DropCap letter={firstLetter} />
            {firstParagraphRest}
          </p>
        )}

        {/* Remaining paragraphs (flow alongside and naturally wrap below the image) */}
        {remainingParagraphs.map((para, index) => (
          <p key={index} className="newspaper-columns mb-3">
            {para}
          </p>
        ))}

        {/* Tag Badges */}
        {tags && tags.length > 0 && (
          <div className="my-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        {(primaryLink || secondaryLink) && (
          <div className="pt-3 border-t-2 border-ink-rule flex flex-wrap items-center gap-3 mt-4">
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
    </article>
  );
}
