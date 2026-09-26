import type { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import Divider from "@/components/ui/Divider";
import { EXPERIENCE_DATA } from "./data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional software development experience of Sahil K. Chhatbar at Lamda Logs.",
};

export default function ExperiencePage() {
  const { meta, roles, dossier, dossiers } = EXPERIENCE_DATA;
  const companyList = dossiers && dossiers.length > 0 ? dossiers : [dossier];

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-ink-rule/25">
        {/* Left / Main Stories (Span 8) */}
        <div className="lg:col-span-8 lg:pr-6 space-y-8">
          {roles.map((role, rIdx) => (
            <div key={role.id} className="space-y-8">
              {rIdx > 0 && <Divider type="double" />}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest text-paper-card ${
                      role.type === "Full-Time" ? "bg-ink-primary" : "bg-ink-subtle"
                    }`}
                  >
                    {role.appointmentTag}
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      role.type === "Full-Time" ? "bg-ink-rule" : "bg-ink-subtle"
                    }`}
                  ></span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-headline text-xl sm:text-2xl lg:text-3xl font-black uppercase text-ink-primary leading-tight">
                    {role.company} — {role.role}
                  </h4>
                  {role.logo && (
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 bg-paper-white border-2 border-ink-rule p-1">
                      <Image
                        src={role.logo}
                        alt={role.company}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <div className="py-1 border-t border-b border-ink-rule/20 flex flex-wrap items-center justify-between text-fine font-sans uppercase tracking-wider text-ink-subtle">
                  <span className="font-bold text-ink-primary">
                    PERIOD: {role.period}
                  </span>
                  <span>LOCATION: {role.location}</span>
                </div>

                <h5 className="font-headline font-bold text-sm uppercase text-ink-dark">
                  {role.leadStory}
                </h5>

                <div className="space-y-2.5 font-serif text-sm sm:text-base leading-relaxed text-ink-dark">
                  <p className="newspaper-columns">{role.narrative}</p>

                  <div className="bg-paper-card border border-ink-rule p-3 my-3">
                    <div className="font-sans text-xs-compact font-bold uppercase tracking-wider text-ink-primary mb-2 border-b border-ink-rule pb-1">
                      KEY RESPONSIBILITIES &amp; ACHIEVEMENTS:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm font-serif">
                      {role.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="font-bold text-ink-primary shrink-0 font-sans">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-2 border-t border-dashed border-ink-rule/30">
                  <div className="text-xs-compact font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1.5">
                    TECHNOLOGIES USED:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary"
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
        <div className="lg:col-span-4 lg:pl-6 pt-6 lg:pt-0 space-y-6">
          {/* Company Dossiers */}
          {companyList.map((comp, dIdx) => (
            <div key={dIdx} className="p-3 border-2 border-ink-rule bg-paper-card">
              <div className="flex items-start justify-between gap-2 border-b border-ink-rule pb-1 mb-2">
                <div className="font-sans text-xs-compact font-bold uppercase tracking-wider text-ink-primary">
                  {comp.title}
                </div>
                {comp.logo && (
                  <div className="relative w-8 h-8 shrink-0 bg-paper-white border border-ink-rule p-0.5">
                    <Image
                      src={comp.logo}
                      alt={comp.companyName}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                )}
              </div>
              <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
                {comp.companyName}
              </h4>
              <p className="font-serif text-xs leading-relaxed text-ink-subtle mt-1">
                {comp.description}
              </p>
              <div className="mt-3 pt-2 border-t border-ink-rule/20 text-fine font-mono text-ink-body">
                {comp.headquarters}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
