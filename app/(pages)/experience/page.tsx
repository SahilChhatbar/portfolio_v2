import type { Metadata } from 'next'
import Image from 'next/image'
import PageContainer from '@/components/layout/PageContainer'
import Divider from '@/components/ui/Divider'
import { EXPERIENCE_DATA } from './data/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional software development experience of Sahil Chhatbar at Lamda Logs.',
}

export default function ExperiencePage() {
  const { meta, roles, dossier, dossiers } = EXPERIENCE_DATA
  const companyList = dossiers && dossiers.length > 0 ? dossiers : [dossier]

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
      {/* Main Experience Layout: 2 Unequal Columns */}
      <div className="divide-ink-rule/25 grid grid-cols-1 gap-6 divide-y lg:grid-cols-12 lg:divide-x lg:divide-y-0">
        {/* Left / Main Stories (Span 8) */}
        <div className="space-y-8 lg:col-span-8 lg:pr-6">
          {roles.map((role, rIdx) => (
            <div
              key={role.id}
              className="space-y-8"
            >
              {rIdx > 0 && <Divider type="double" />}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs-compact text-paper-card px-2 py-0.5 font-sans font-bold tracking-widest uppercase ${
                      role.type === 'Full-Time' ? 'bg-ink-primary' : 'bg-ink-subtle'
                    }`}
                  >
                    {role.appointmentTag}
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      role.type === 'Full-Time' ? 'bg-ink-rule' : 'bg-ink-subtle'
                    }`}
                  ></span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-headline text-ink-primary text-xl leading-tight font-black uppercase sm:text-2xl lg:text-3xl">
                    {role.company} — {role.role}
                  </h4>
                  {role.logo && (
                    <div className="bg-paper-white border-ink-rule relative h-10 w-10 shrink-0 border-2 p-1 sm:h-11 sm:w-11">
                      <Image
                        src={role.logo}
                        alt={role.company}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <div className="border-ink-rule/20 text-fine text-ink-subtle flex flex-wrap items-center justify-between border-t border-b py-1 font-sans tracking-wider uppercase">
                  <span className="text-ink-primary font-bold">PERIOD: {role.period}</span>
                  <span>LOCATION: {role.location}</span>
                </div>

                <h5 className="font-headline text-ink-dark text-sm font-bold uppercase">
                  {role.leadStory}
                </h5>

                <div className="text-ink-dark space-y-2.5 font-serif text-sm leading-relaxed sm:text-base">
                  <p className="newspaper-columns">{role.narrative}</p>

                  <div className="bg-paper-card border-ink-rule my-3 border p-3">
                    <div className="text-xs-compact text-ink-primary border-ink-rule mb-2 border-b pb-1 font-sans font-bold tracking-wider uppercase">
                      KEY RESPONSIBILITIES &amp; ACHIEVEMENTS:
                    </div>
                    <ul className="space-y-2 font-serif text-xs sm:text-sm">
                      {role.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2"
                        >
                          <span className="text-ink-primary shrink-0 font-sans font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-ink-rule/30 border-t border-dashed pt-2">
                  <div className="text-xs-compact text-ink-subtle mb-1.5 font-sans font-bold tracking-wider uppercase">
                    TECHNOLOGIES USED:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border-ink-rule bg-paper-white text-ink-primary border px-2 py-0.5 font-sans text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar / Editorial Boxes (Span 4) */}
        <div className="space-y-6 pt-6 lg:col-span-4 lg:pt-0 lg:pl-6">
          {/* Company Dossiers */}
          {companyList.map((comp, dIdx) => (
            <div
              key={dIdx}
              className="border-ink-rule bg-paper-card border-2 p-3"
            >
              <div className="border-ink-rule mb-2 flex items-start justify-between gap-2 border-b pb-1">
                <div className="text-xs-compact text-ink-primary font-sans font-bold tracking-wider uppercase">
                  {comp.title}
                </div>
                {comp.logo && (
                  <div className="bg-paper-white border-ink-rule relative h-8 w-8 shrink-0 border p-0.5">
                    <Image
                      src={comp.logo}
                      alt={comp.companyName}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                )}
              </div>
              <h4 className="font-headline text-ink-primary text-base font-bold uppercase">
                {comp.companyName}
              </h4>
              <p className="text-ink-subtle mt-1 font-serif text-xs leading-relaxed">
                {comp.description}
              </p>
              <div className="border-ink-rule/20 text-fine text-ink-body mt-3 border-t pt-2 font-mono">
                {comp.headquarters}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
