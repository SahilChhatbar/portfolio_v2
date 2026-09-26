import type { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import { CAREER_DATA } from "./data/career";

export const metadata: Metadata = {
  title: "Career & Education",
  description:
    "Chronological engineering history, academic pedigree, and development timeline of Sahil K. Chhatbar.",
};

export default function CareerPage() {
  const {
    meta,
    overview,
    timelineWireTag,
    milestones,
    pedigreeTag,
    education,
  } = CAREER_DATA;

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
      <div className="border-b-2 border-ink-rule pb-3 mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs font-sans uppercase tracking-wider text-ink-subtle mb-1">
          <span className="font-bold text-ink-primary">{overview.dispatchesTag}</span>
          <span>{overview.archiveTag}</span>
        </div>
        <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase text-ink-primary leading-tight">
          {overview.headline}
        </h3>
        <p className="font-serif italic text-sm sm:text-base text-ink-subtle mt-1">
          {overview.subtitle}
        </p>
      </div>

      {/* Main 2-Column Broad Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-ink-rule/25">
        {/* Left Column (Span 7): Chronological Milestone Dispatches */}
        <div className="lg:col-span-7 lg:pr-6 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest">
              {timelineWireTag}
            </span>
            <span className="h-px flex-1 bg-ink-rule"></span>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-ink-rule space-y-1">
                {/* Print Milestone Dot */}
                <div className="absolute -left-1.75 top-1 w-3 h-3 bg-ink-primary border-2 border-paper-white" />

                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-ink-primary bg-paper-card px-1.5 py-0.5 border border-ink-rule/30">
                      {milestone.year}
                    </span>
                    <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
                      {milestone.headline}
                    </h4>
                  </div>
                  {milestone.logo && (
                    <div className="relative w-7 h-7 shrink-0 bg-paper-white border border-ink-rule p-0.5 mt-0.5">
                      <Image
                        src={milestone.logo}
                        alt={milestone.headline}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <p className="font-serif text-xs sm:text-sm text-ink-body leading-relaxed newspaper-columns">
                  {milestone.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Span 5): Academic Chronicle & Credentials */}
        <div className="lg:col-span-5 lg:pl-6 pt-6 lg:pt-0 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest">
              {pedigreeTag}
            </span>
            <span className="h-px flex-1 bg-ink-rule"></span>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-ink-rule bg-paper-white space-y-2"
              >
                <div className="flex items-center justify-between border-b border-ink-rule/30 pb-1">
                  <span className="font-mono text-fine font-bold text-ink-primary">
                    {edu.year}
                  </span>
                  {edu.score && (
                    <span className="text-xs-compact font-sans font-bold uppercase bg-ink-primary text-paper-card px-1.5 py-0.5">
                      {edu.score}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2.5">
                  <div className="space-y-1">
                    <h4 className="font-headline font-black text-base uppercase text-ink-primary leading-snug">
                      {edu.degree}
                    </h4>
                    <div className="font-serif italic text-xs text-ink-muted">
                      {edu.institution} — {edu.location}
                    </div>
                  </div>
                  {edu.logo && (
                    <div className="relative w-9 h-9 shrink-0 bg-paper-card border border-ink-rule p-0.5">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <ul className="space-y-1 text-xs font-serif text-ink-body pt-1">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-1.5">
                      <span className="font-bold text-ink-primary font-sans">•</span>
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
  );
}
