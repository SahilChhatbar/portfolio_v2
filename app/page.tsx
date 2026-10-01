import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/content/Card'
import ImageFrame from '@/components/content/ImageFrame'
import PageContainer from '@/components/layout/PageContainer'
import Divider from '@/components/ui/Divider'
import DropCap from '@/components/ui/DropCap'
import { ABOUT_DATA } from './data/about'

export const metadata: Metadata = {
  title: 'Sahil Chhatbar — Software Developer',
  description:
    'Biography and profile of Sahil Chhatbar, a Software Developer focused on React.js, Next.js, TypeScript, and modern web application development.',
  openGraph: {
    type: 'website',
    title: 'Sahil Chhatbar — Software Developer',
    description:
      'Biography and profile of Sahil Chhatbar, a Software Developer focused on React.js, Next.js, TypeScript, and modern web application development.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Chhatbar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Chhatbar — Software Developer',
    description:
      'Biography and profile of Sahil Chhatbar, a Software Developer focused on React.js, Next.js, TypeScript, and modern web application development.',
    images: ['/images/og-image.png'],
  },
}

export default function RootPage() {
  const { meta, article, profileImage, dossier, manifesto, refactoring, offDuty } = ABOUT_DATA

  const firstParagraph = article.bioParagraphs[0]
  const firstLetter = firstParagraph.charAt(0)
  const firstParagraphRest = firstParagraph.slice(1)

  return (
    <PageContainer
      pageNumber={meta.pageNumber}
      totalPages={meta.totalPages}
      pageTitle={meta.pageTitle}
      category={meta.category}
      subtitle={meta.subtitle}
      prevHref={meta.prevHref}
      nextHref={meta.nextHref}
    >
      {/* Top Main Article: Text on Left (65%) + Profile Image on Right (35%) on md (768px+) */}
      <div className="flex flex-col gap-6 pb-6 md:flex-row">
        {/* Left Column (65%): Biography & Editorial */}
        <div className="flex w-full flex-col justify-between md:w-[65%]">
          <div>
            {/* Kicker */}
            <div className="text-xs-compact text-ink-primary border-ink-rule mb-1 inline-block border-b pb-0.5 font-sans font-bold tracking-[0.2em] uppercase">
              {article.kicker}
            </div>

            {/* Main Headline */}
            <h3 className="font-headline text-ink-primary mb-2 text-2xl leading-tight font-black uppercase sm:text-4xl">
              {article.headline}
            </h3>

            {/* Sub-headline */}
            <h4 className="text-ink-body mb-2 font-serif text-base italic sm:text-lg">
              {article.subheadline}
            </h4>

            {/* Biography Lead with DropCap */}
            <div className="text-ink-dark mt-3 space-y-3 font-serif text-sm leading-relaxed sm:text-base">
              <p className="newspaper-columns">
                <DropCap letter={firstLetter} />
                {firstParagraphRest}
              </p>

              {article.bioParagraphs.slice(1).map((paragraph, index) => (
                <p
                  key={index}
                  className="newspaper-columns"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="border-ink-rule mt-6 flex flex-wrap items-center justify-between gap-2 border-t-2 pt-3">
            <div className="text-ink-muted font-serif text-xs italic">
              &ldquo;{article.quote}&rdquo;
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={article.actions.emailUrl}
                className="bg-ink-primary text-paper-bg font-headline px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
              >
                {article.actions.emailText}
              </a>
              <a
                href={article.actions.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-ink-rule bg-paper-white text-ink-primary font-headline hover:bg-ink-primary/10 border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                {article.actions.linkedinText}
              </a>
              <Link
                href={article.actions.moreLinksUrl}
                className="border-ink-rule bg-paper-white text-ink-primary font-headline hover:bg-ink-primary/10 border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                {article.actions.moreLinksText}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (35%): Profile Photo Frame & Dossier */}
        <div className="flex w-full shrink-0 flex-col items-center md:w-[35%]">
          <ImageFrame
            src={profileImage.src}
            alt={profileImage.alt}
            aspectRatio={profileImage.aspectRatio}
            priority={profileImage.priority}
            objectFit="cover"
          />

          {/* Side Bio Card */}
          <div className="border-ink-rule bg-paper-card mt-3 w-full space-y-1.5 border p-3 font-serif text-xs">
            <div className="text-xs-compact text-ink-primary border-ink-rule border-b pb-0.5 font-sans font-bold tracking-wider uppercase">
              {dossier.title}
            </div>
            {dossier.items.map((item, index) => (
              <div
                key={item.label}
                className={`flex justify-between ${
                  index < dossier.items.length - 1
                    ? 'border-ink-rule/20 border-b border-dashed pb-0.5'
                    : ''
                }`}
              >
                <span className="text-ink-muted">{item.label}</span>
                <span className="text-ink-primary font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider type="double" />

      {/* Secondary 3-Column Editorial Grid */}
      <div className="divide-ink-rule/25 grid grid-cols-1 gap-6 divide-y pt-2 md:grid-cols-3 md:divide-x md:divide-y-0">
        {/* Column 1: Engineering Philosophy */}
        <div className="space-y-2 pt-3 md:pt-0 md:pr-4">
          <h4 className="font-headline text-ink-primary border-ink-rule border-b pb-1 text-lg font-bold uppercase">
            {manifesto.title}
          </h4>
          <p className="text-ink-dark newspaper-columns font-serif text-xs leading-relaxed sm:text-sm">
            {manifesto.description}
          </p>
          <ul className="text-ink-body space-y-1 pt-1 font-serif text-xs">
            {manifesto.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Column 2: Continuous Improvement */}
        <div className="space-y-2 pt-3 md:px-4 md:pt-0">
          <h4 className="font-headline text-ink-primary border-ink-rule border-b pb-1 text-lg font-bold uppercase">
            {refactoring.title}
          </h4>
          {refactoring.paragraphs.map((p, index) => (
            <p
              key={index}
              className="text-ink-dark newspaper-columns font-serif text-xs leading-relaxed sm:text-sm"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Column 3: Interests & Hobbies */}
        <div className="space-y-2 pt-3 md:pt-0 md:pl-4">
          <Card
            title={offDuty.title}
            badge={offDuty.badge}
            variant="boxed"
          >
            <p className="newspaper-columns">{offDuty.description}</p>
            <div className="text-xs-compact mt-2 font-mono text-neutral-600">{offDuty.status}</div>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}
