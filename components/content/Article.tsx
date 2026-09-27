import React from 'react'
import Link from 'next/link'
import Icon from '@/components/icons/Icon'
import DropCap from '@/components/ui/DropCap'
import { ICONS } from '@/constants/icons'
import ImageFrame from './ImageFrame'

interface ArticleProps {
  kicker?: string
  headline: string
  subheadline?: string
  paragraphs: string[]
  imageSrc?: string
  imageAlt?: string
  imageObjectFit?: 'cover' | 'contain'
  imagePriority?: boolean
  tags?: string[]
  primaryLink?: { text: string; href: string; external?: boolean }
  secondaryLink?: { text: string; href: string; external?: boolean }
  className?: string
}

export default function Article({
  kicker,
  headline,
  subheadline,
  paragraphs,
  imageSrc,
  imageAlt,
  imageObjectFit = 'contain',
  imagePriority = false,
  tags,
  primaryLink,
  secondaryLink,
  className = '',
}: ArticleProps) {
  const firstParagraph = paragraphs[0] || ''
  const firstLetter = firstParagraph.charAt(0)
  const firstParagraphRest = firstParagraph.slice(1)
  const remainingParagraphs = paragraphs.slice(1)

  return (
    <article className={`space-y-4 ${className}`}>
      {/* Kicker Header */}
      {kicker && (
        <div className="flex items-center space-x-2">
          <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
            {kicker}
          </span>
          <span className="bg-ink-rule h-px flex-1"></span>
        </div>
      )}

      {/* Main Headline */}
      <h2 className="font-headline text-ink-primary text-2xl leading-[1.05] font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
        {headline}
      </h2>

      {/* Sub-headline */}
      {subheadline && (
        <h3 className="text-ink-subtle border-ink-rule/30 border-b pb-2 font-serif text-base leading-snug italic sm:text-lg">
          {subheadline}
        </h3>
      )}

      {/* Article Body with Floated Media for Editorial Wrap */}
      <div className="text-ink-dark flow-root font-serif text-sm leading-relaxed sm:text-base">
        {/* Floated Image Frame */}
        {imageSrc && (
          <div className="mb-4 w-full md:float-right md:mb-4 md:ml-6 md:w-[48%]">
            <ImageFrame
              src={imageSrc}
              alt={imageAlt || headline}
              aspectRatio="landscape"
              objectFit={imageObjectFit}
              priority={imagePriority}
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
          <p
            key={index}
            className="newspaper-columns mb-3"
          >
            {para}
          </p>
        ))}

        {/* Tag Badges */}
        {tags && tags.length > 0 && (
          <div className="my-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-ink-rule bg-paper-white text-ink-primary border px-2 py-0.5 font-sans text-xs font-semibold shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        {(primaryLink || secondaryLink) && (
          <div className="border-ink-rule mt-4 flex flex-wrap items-center gap-3 border-t-2 pt-3">
            {primaryLink &&
              (primaryLink.external ? (
                <a
                  href={primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
                >
                  <span>{primaryLink.text}</span>
                  <Icon
                    icon={ICONS.externalLink}
                    className="h-3.5 w-3.5"
                  />
                </a>
              ) : (
                <Link
                  href={primaryLink.href}
                  className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
                >
                  <span>{primaryLink.text}</span>
                  <Icon
                    icon={ICONS.arrowRight}
                    className="h-3.5 w-3.5"
                  />
                </Link>
              ))}

            {secondaryLink &&
              (secondaryLink.external ? (
                <a
                  href={secondaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-ink-rule bg-paper-white text-ink-primary font-headline hover:bg-ink-primary/10 inline-flex items-center space-x-1.5 border px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <span>{secondaryLink.text}</span>
                  <Icon
                    icon={ICONS.externalLink}
                    className="h-3.5 w-3.5"
                  />
                </a>
              ) : (
                <Link
                  href={secondaryLink.href}
                  className="border-ink-rule bg-paper-white text-ink-primary font-headline hover:bg-ink-primary/10 inline-flex items-center space-x-1.5 border px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <span>{secondaryLink.text}</span>
                  <Icon
                    icon={ICONS.arrowRight}
                    className="h-3.5 w-3.5"
                  />
                </Link>
              ))}
          </div>
        )}
      </div>
    </article>
  )
}
