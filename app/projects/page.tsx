import type { Metadata } from "next";
import NewspaperPage from "@/components/newspaper/NewspaperPage";
import LeadArticle from "@/components/newspaper/LeadArticle";
import NewspaperImage from "@/components/newspaper/NewspaperImage";
import Divider from "@/components/newspaper/Divider";
import ClassifiedBox from "@/components/newspaper/ClassifiedBox";
import { PROJECTS_DATA } from "./data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects and full-stack software creations built by Sahil K. Chhatbar.",
};

export default function ProjectsPage() {
  const { meta, projects, classifieds } = PROJECTS_DATA;
  const [fitRep, radioVerse, cineScope] = projects;

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
      {/* Featured Project 1: FitRep (Full Broadsheet Lead) */}
      {fitRep && (
        <div className="pb-6">
          <LeadArticle
            kicker={fitRep.kicker || "FEATURED PROJECT • FULL-STACK APP"}
            headline={fitRep.leadHeadline}
            subheadline={fitRep.subtitle}
            byline="SAHIL K. CHHATBAR"
            dateline="AHMEDABAD"
            date={fitRep.date}
            paragraphs={[fitRep.description, ...fitRep.fullStory]}
            imageSrc={fitRep.image}
            imageAlt={fitRep.imageAlt}
            imageCaption={fitRep.caption}
            tags={fitRep.tags}
            primaryLink={{
              text: "VIEW ON GITHUB",
              href: fitRep.githubUrl || "#",
              external: true,
            }}
            secondaryLink={{
              text: "LIVE DEMO",
              href: fitRep.liveUrl || "#",
              external: true,
            }}
          />
        </div>
      )}

      <Divider type="double" />

      {/* Projects 2 & 3: RadioVerse and CineScope in Asymmetric Broadsheet Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-ink-rule/25 py-4">
        {/* Project 2: RadioVerse (Span 6) */}
        {radioVerse && (
          <div className="lg:col-span-6 lg:pr-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
                {radioVerse.wireTag || "PROJECT 02 • AUDIO STREAMING"}
              </span>
              <span className="h-px flex-1 bg-ink-rule"></span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-ink-primary leading-tight">
              {radioVerse.leadHeadline}
            </h3>

            <h4 className="font-serif italic text-sm text-ink-subtle">
              {radioVerse.subtitle}
            </h4>

            {/* PNG Image */}
            <NewspaperImage
              src={radioVerse.image}
              alt={radioVerse.imageAlt}
              caption={radioVerse.caption}
              aspectRatio="landscape"
            />

            <div className="space-y-2 font-serif text-sm leading-relaxed text-ink-dark">
              <p className="newspaper-columns">{radioVerse.description}</p>
              {radioVerse.fullStory.map((p, i) => (
                <p key={i} className="newspaper-columns">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2 border-t border-dashed border-ink-rule/30">
              <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1">
                TECH STACK:
              </div>
              <div className="flex flex-wrap gap-1">
                {radioVerse.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {radioVerse.githubUrl && (
              <div className="pt-2 border-t border-ink-rule flex gap-2">
                <a
                  href={radioVerse.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  VIEW ON GITHUB »
                </a>
              </div>
            )}
          </div>
        )}

        {/* Project 3: CineScope (Span 6) */}
        {cineScope && (
          <div className="lg:col-span-6 lg:pl-6 pt-6 lg:pt-0 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
                {cineScope.wireTag || "PROJECT 03 • MEDIA DISCOVERY"}
              </span>
              <span className="h-px flex-1 bg-ink-rule"></span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-ink-primary leading-tight">
              {cineScope.leadHeadline}
            </h3>

            <h4 className="font-serif italic text-sm text-ink-subtle">
              {cineScope.subtitle}
            </h4>

            {/* PNG Image */}
            <NewspaperImage
              src={cineScope.image}
              alt={cineScope.imageAlt}
              caption={cineScope.caption}
              aspectRatio="landscape"
            />

            <div className="space-y-2 font-serif text-sm leading-relaxed text-ink-dark">
              <p className="newspaper-columns">{cineScope.description}</p>
              {cineScope.fullStory.map((p, i) => (
                <p key={i} className="newspaper-columns">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2 border-t border-dashed border-ink-rule/30">
              <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1">
                TECH STACK:
              </div>
              <div className="flex flex-wrap gap-1">
                {cineScope.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-sans font-semibold border border-ink-rule bg-paper-white text-ink-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {cineScope.githubUrl && (
              <div className="pt-2 border-t border-ink-rule flex gap-2">
                <a
                  href={cineScope.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  VIEW ON GITHUB »
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <Divider type="single" />

      {/* Bottom Editorial Classifieds Box */}
      <div className="p-4 bg-paper-card border-2 border-ink-rule grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-1">
          <div className="font-sans font-bold text-[10px] uppercase tracking-wider text-ink-primary">
            {classifieds.kicker}
          </div>
          <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
            {classifieds.headline}
          </h4>
          <p className="font-serif text-xs leading-relaxed text-ink-body newspaper-columns">
            {classifieds.description}
          </p>
        </div>

        <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-ink-rule/30 pt-3 md:pt-0 md:pl-4 flex flex-col justify-center">
          <ClassifiedBox
            title={classifieds.boxTitle}
            badge={classifieds.badge}
            action={{
              text: classifieds.actionText,
              href: classifieds.actionHref,
              external: true,
            }}
          >
            {classifieds.text}
          </ClassifiedBox>
        </div>
      </div>
    </NewspaperPage>
  );
}
