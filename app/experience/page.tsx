import type { Metadata } from "next";
import NewspaperPage from "@/components/newspaper/NewspaperPage";
import Divider from "@/components/newspaper/Divider";
import ClassifiedBox from "@/components/newspaper/ClassifiedBox";
import { EXPERIENCE_DATA } from "./data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional software development experience of Sahil K. Chhatbar at Lamda Logs.",
};

export default function ExperiencePage() {
  const { meta, banner, roles, dossier, culture, recommendations } =
    EXPERIENCE_DATA;
  const currentRole = roles[0];
  const internRole = roles[1];

  return (
    <NewspaperPage
      pageNumber={meta.pageNumber}
      totalPages={meta.totalPages}
      pageTitle={meta.pageTitle}
      category={meta.category}
      subtitle={meta.subtitle}
      prevHref={meta.prevHref}
      nextHref={meta.nextHref}
    >
      {/* Editorial Overview Banner */}
      <div className="border-b-2 border-ink-rule pb-3 mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs font-sans uppercase tracking-wider text-ink-subtle mb-1">
          <span className="font-bold text-ink-primary">{banner.fieldReport}</span>
          <span>{banner.correspondence}</span>
        </div>
        <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase text-ink-primary leading-tight">
          {banner.headline}
        </h3>
        <p className="font-serif italic text-sm sm:text-base text-ink-subtle mt-1">
          {banner.subtitle}
        </p>
      </div>

      {/* Main Experience Layout: 2 Unequal Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-ink-rule/25">
        {/* Left / Main Stories (Span 8) */}
        <div className="lg:col-span-8 lg:pr-6 space-y-8">
          {/* Article 1: Full-Time Software Developer */}
          {currentRole && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
                  {currentRole.appointmentTag}
                </span>
                <span className="h-px flex-1 bg-ink-rule"></span>
              </div>

              <h4 className="font-headline text-xl sm:text-3xl font-black uppercase text-ink-primary leading-tight">
                {currentRole.company} — {currentRole.role}
              </h4>

              <div className="py-1 border-t border-b border-ink-rule/20 flex flex-wrap items-center justify-between text-[11px] font-sans uppercase tracking-wider text-ink-subtle">
                <span className="font-bold text-ink-primary">
                  PERIOD: {currentRole.period}
                </span>
                <span>LOCATION: {currentRole.location}</span>
              </div>

              <h5 className="font-headline font-bold text-sm uppercase text-ink-dark">
                {currentRole.leadStory}
              </h5>

              <div className="space-y-2.5 font-serif text-sm sm:text-base leading-relaxed text-ink-dark">
                <p className="newspaper-columns">{currentRole.narrative}</p>

                <div className="bg-paper-card border border-ink-rule p-3 my-3">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-primary mb-2 border-b border-ink-rule pb-1">
                    KEY RESPONSIBILITIES &amp; ACHIEVEMENTS:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm font-serif">
                    {currentRole.highlights.map((highlight, idx) => (
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
                <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1.5">
                  TECHNOLOGIES USED:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentRole.technologies.map((tech) => (
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
          )}

          <Divider type="double" />

          {/* Article 2: Software Developer Intern */}
          {internRole && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="bg-ink-subtle text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
                  {internRole.appointmentTag}
                </span>
                <span className="h-px flex-1 bg-ink-subtle"></span>
              </div>

              <h4 className="font-headline text-xl sm:text-2xl font-black uppercase text-ink-primary leading-tight">
                {internRole.company} — {internRole.role}
              </h4>

              <div className="py-1 border-t border-b border-ink-rule/20 flex flex-wrap items-center justify-between text-[11px] font-sans uppercase tracking-wider text-ink-subtle">
                <span className="font-bold text-ink-primary">
                  PERIOD: {internRole.period}
                </span>
                <span>LOCATION: {internRole.location}</span>
              </div>

              <h5 className="font-headline font-bold text-sm uppercase text-ink-dark">
                {internRole.leadStory}
              </h5>

              <div className="space-y-2 font-serif text-sm leading-relaxed text-ink-dark">
                <p className="newspaper-columns">{internRole.narrative}</p>

                <div className="bg-paper-white border border-ink-rule/40 p-3 my-2">
                  <ul className="space-y-1.5 text-xs font-serif">
                    {internRole.highlights.map((highlight, idx) => (
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
                <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1.5">
                  TECHNOLOGIES USED:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {internRole.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-sans font-semibold border border-ink-rule/30 bg-paper-card text-ink-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar / Editorial Boxes (Span 4) */}
        <div className="lg:col-span-4 lg:pl-6 pt-6 lg:pt-0 space-y-6">
          {/* Company Dossier */}
          <div className="p-3 border-2 border-ink-rule bg-paper-card">
            <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-primary border-b border-ink-rule pb-1 mb-2">
              {dossier.title}
            </div>
            <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
              {dossier.companyName}
            </h4>
            <p className="font-serif text-xs leading-relaxed text-ink-subtle mt-1">
              {dossier.description}
            </p>
            <div className="mt-3 pt-2 border-t border-ink-rule/20 text-[11px] font-mono text-ink-body">
              {dossier.headquarters}
            </div>
          </div>

          {/* Editorial Notes on Team Work */}
          <div className="p-3 border border-ink-rule bg-paper-white space-y-2">
            <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-primary border-b border-ink-rule pb-1">
              {culture.title}
            </div>
            <p className="font-serif text-xs leading-relaxed text-ink-dark newspaper-columns">
              {culture.description}
            </p>
          </div>

          {/* Classifieds Box */}
          <ClassifiedBox
            title={recommendations.title}
            badge={recommendations.badge}
            action={{
              text: recommendations.actionText,
              href: recommendations.actionHref,
              external: true,
            }}
          >
            {recommendations.text}
          </ClassifiedBox>
        </div>
      </div>
    </NewspaperPage>
  );
}
