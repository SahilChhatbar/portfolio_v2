import React from "react";
import Link from "next/link";
import DropCap from "./DropCap";
import ArticleMeta from "./ArticleMeta";
import NewspaperImage from "./NewspaperImage";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface LeadArticleProps {
  kicker?: string;
  headline: string;
  subheadline?: string;
  byline?: string;
  dateline?: string;
  date?: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  tags?: string[];
  primaryLink?: { text: string; href: string; external?: boolean };
  secondaryLink?: { text: string; href: string; external?: boolean };
  className?: string;
}

export default function LeadArticle({
  kicker = "LEAD STORY",
  headline,
  subheadline,
  byline = "SAHIL K. CHHATBAR",
  dateline = "AHMEDABAD",
  date,
  paragraphs,
  imageSrc,
  imageAlt = "Story illustration",
  imageCaption,
  imageCredit,
  tags,
  primaryLink,
  secondaryLink,
  className = "",
}: LeadArticleProps) {
  const firstParagraph = paragraphs[0] || "";
  const remainingParagraphs = paragraphs.slice(1);

  const firstLetter = firstParagraph.charAt(0);
  const firstParagraphRest = firstParagraph.slice(1);

  return (
    <article className={`w-full ${className}`}>
      {/* Header Eyebrow */}
      {kicker && (
        <div className="flex items-center space-x-2 mb-1">
          <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
            {kicker}
          </span>
          <span className="h-px flex-1 bg-ink-rule"></span>
        </div>
      )}

      {/* Main Massive Lead Headline */}
      <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-ink-primary leading-[1.02] tracking-tight my-2">
        {headline}
      </h2>

      {/* Sub-headline */}
      {subheadline && (
        <p className="font-serif italic text-base sm:text-lg text-ink-body leading-snug mb-2">
          {subheadline}
        </p>
      )}

      {/* Byline and Dateline */}
      <ArticleMeta
        byline={byline}
        dateline={dateline}
        date={date}
      />

      {/* Editorial Content Layout: Text on Left + Vertical Image on Right */}
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left / Main Text Area */}
        <div className={imageSrc ? "lg:col-span-7 xl:col-span-8 flex flex-col justify-between" : "lg:col-span-12"}>
          <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-ink-dark">
            {firstParagraph && (
              <p className="newspaper-columns">
                <DropCap letter={firstLetter} />
                {firstParagraphRest}
              </p>
            )}

            {remainingParagraphs.map((para, index) => (
              <p key={index} className="newspaper-columns">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-4 pt-2 border-t border-dashed border-ink-rule/30">
              <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1.5">
                DISPATCH TECH STACK:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          {(primaryLink || secondaryLink) && (
            <div className="mt-4 pt-2 border-t-2 border-ink-rule flex flex-wrap gap-3">
              {primaryLink && (
                <Link
                  href={primaryLink.href}
                  target={primaryLink.external ? "_blank" : undefined}
                  rel={primaryLink.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  <span>{primaryLink.text}</span>
                  <Icon icon={primaryLink.external ? ICONS.externalLink : ICONS.arrowRight} className="w-4 h-4" />
                </Link>
              )}

              {secondaryLink && (
                <Link
                  href={secondaryLink.href}
                  target={secondaryLink.external ? "_blank" : undefined}
                  rel={secondaryLink.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
                >
                  <span>{secondaryLink.text}</span>
                  <Icon icon={secondaryLink.external ? ICONS.externalLink : ICONS.arrowRight} className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Right Vertical Image Frame */}
        {imageSrc && (
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start">
            <NewspaperImage
              src={imageSrc}
              alt={imageAlt}
              caption={imageCaption}
              credit={imageCredit}
              aspectRatio="portrait"
              priority
            />
          </div>
        )}
      </div>
    </article>
  );
}
