import type { Metadata } from 'next'
import Image from 'next/image'
import PageContainer from '@/components/layout/PageContainer'
import { CAREER_DATA } from './data/career'

export const metadata: Metadata = {
  title: 'Career & Education',
  description:
    'Chronological engineering history, academic pedigree, and development timeline of Sahil Chhatbar.',
}

export default function CareerPage() {
  const { meta, overview, timelineWireTag, milestones, pedigreeTag, education } = CAREER_DATA

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
      {/* Overview Lead */}
      <div className="border-ink-rule mb-6 border-b-2 pb-3">
        <div className="text-ink-subtle mb-1 flex flex-wrap items-center justify-between font-sans text-xs tracking-wider uppercase">
          <span className="text-ink-primary font-bold">{overview.dispatchesTag}</span>
          <span>{overview.archiveTag}</span>
        </div>
        <h3 className="font-headline text-ink-primary text-2xl leading-tight font-black uppercase sm:text-4xl">
          {overview.headline}
        </h3>
        <p className="text-ink-subtle mt-1 font-serif text-sm italic sm:text-base">
          {overview.subtitle}
        </p>
      </div>

      {/* Main 2-Column Broad Layout */}
      <div className="divide-ink-rule/25 grid grid-cols-1 gap-6 divide-y lg:grid-cols-12 lg:divide-x lg:divide-y-0">
        {/* Left Column (Span 7): Chronological Milestone Dispatches */}
        <div className="space-y-6 lg:col-span-7 lg:pr-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
              {timelineWireTag}
            </span>
            <span className="bg-ink-rule h-px flex-1"></span>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="border-ink-rule relative space-y-1 border-l-2 pl-6"
              >
                {/* Print Milestone Dot */}
                <div className="bg-ink-primary border-paper-white absolute top-1 -left-1.75 h-3 w-3 border-2" />

                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-ink-primary bg-paper-card border-ink-rule/30 border px-1.5 py-0.5 font-mono text-xs font-bold">
                      {milestone.year}
                    </span>
                    <h4 className="font-headline text-ink-primary text-base font-bold uppercase">
                      {milestone.headline}
                    </h4>
                  </div>
                  {milestone.logo && (
                    <div className="bg-paper-white border-ink-rule relative mt-0.5 h-7 w-7 shrink-0 border p-0.5">
                      <Image
                        src={milestone.logo}
                        alt={milestone.headline}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <p className="text-ink-body newspaper-columns font-serif text-xs leading-relaxed sm:text-sm">
                  {milestone.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Span 5): Academic Chronicle & Credentials */}
        <div className="space-y-6 pt-6 lg:col-span-5 lg:pt-0 lg:pl-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
              {pedigreeTag}
            </span>
            <span className="bg-ink-rule h-px flex-1"></span>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border-ink-rule bg-paper-white space-y-2 border p-3.5"
              >
                <div className="border-ink-rule/30 flex items-center justify-between border-b pb-1">
                  <span className="text-fine text-ink-primary font-mono font-bold">{edu.year}</span>
                  {edu.score && (
                    <span className="text-xs-compact bg-ink-primary text-paper-card px-1.5 py-0.5 font-sans font-bold uppercase">
                      {edu.score}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2.5">
                  <div className="space-y-1">
                    <h4 className="font-headline text-ink-primary text-base leading-snug font-black uppercase">
                      {edu.degree}
                    </h4>
                    <div className="text-ink-muted font-serif text-xs italic">
                      {edu.institution} — {edu.location}
                    </div>
                  </div>
                  {edu.logo && (
                    <div className="bg-paper-card border-ink-rule relative h-9 w-9 shrink-0 border p-0.5">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <ul className="text-ink-body space-y-1 pt-1 font-serif text-xs">
                  {edu.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start space-x-1.5"
                    >
                      <span className="text-ink-primary font-sans font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
