import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Article from "@/components/content/Article";
import ImageFrame from "@/components/content/ImageFrame";
import Divider from "@/components/ui/Divider";
import { PROJECTS_DATA } from "./data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects and full-stack software creations built by Sahil K. Chhatbar.",
};

export default function ProjectsPage() {
  const { meta, projects, githubSection } = PROJECTS_DATA;
  const [fitRep, radioVerse, cineScope] = projects;

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
      {/* Featured Project 1: FitRep (Full Broadsheet Lead) */}
      {fitRep && (
        <div className="pb-6">
          <Article
            kicker={fitRep.kicker || "FEATURED PROJECT • FULL-STACK APP"}
            headline={fitRep.leadHeadline}
            subheadline={fitRep.subtitle}
            paragraphs={[fitRep.description, ...fitRep.fullStory]}
            imageSrc={fitRep.image}
            imageAlt={fitRep.imageAlt}
            imagePriority={fitRep.priority ?? true}
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
              <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest">
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
            <ImageFrame
              src={radioVerse.image}
              alt={radioVerse.imageAlt}
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
              <div className="text-xs-compact font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1">
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

            <div className="pt-2 border-t border-ink-rule flex flex-wrap gap-2">
              {radioVerse.githubUrl && (
                <a
                  href={radioVerse.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  VIEW ON GITHUB »
                </a>
              )}
              {radioVerse.liveUrl && (
                <a
                  href={radioVerse.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
                >
                  LIVE DEMO »
                </a>
              )}
            </div>
          </div>
        )}

        {/* Project 3: CineScope (Span 6) */}
        {cineScope && (
          <div className="lg:col-span-6 lg:pl-6 pt-6 lg:pt-0 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-xs-compact font-bold uppercase tracking-widest">
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
            <ImageFrame
              src={cineScope.image}
              alt={cineScope.imageAlt}
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
              <div className="text-xs-compact font-sans uppercase font-bold tracking-wider text-ink-subtle mb-1">
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

            <div className="pt-2 border-t border-ink-rule flex flex-wrap gap-2">
              {cineScope.githubUrl && (
                <a
                  href={cineScope.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  VIEW ON GITHUB »
                </a>
              )}
              {cineScope.liveUrl && (
                <a
                  href={cineScope.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
                >
                  LIVE DEMO »
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <Divider type="single" />

      {/* Bottom GitHub Repositories Banner */}
      <div className="p-4 bg-paper-card border-2 border-ink-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="font-sans font-bold text-xs-compact uppercase tracking-wider text-ink-primary">
            {githubSection.tag}
          </div>
          <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
            {githubSection.headline}
          </h4>
          <p className="font-serif text-xs text-ink-body">
            {githubSection.description}
          </p>
        </div>

        <a
          href={githubSection.actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
        >
          {githubSection.actionText}
        </a>
      </div>
    </PageContainer>
  );
}
