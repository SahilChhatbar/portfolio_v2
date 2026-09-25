import Card from "@/components/content/Card";
import ImageFrame from "@/components/content/ImageFrame";
import PageContainer from "@/components/layout/PageContainer";
import Divider from "@/components/ui/Divider";
import DropCap from "@/components/ui/DropCap";
import type { Metadata } from "next";
import { ABOUT_DATA } from "./data/about";

export const metadata: Metadata = {
  title: "About Me | Sahil K. Chhatbar",
  description:
    "Biography and profile of Sahil K. Chhatbar — Full-Stack Software Engineer & Builder.",
};

export default function AboutPage() {
  const {
    meta,
    article,
    profileImage,
    dossier,
    manifesto,
    refactoring,
    offDuty,
  } = ABOUT_DATA;

  const firstParagraph = article.bioParagraphs[0];
  const firstLetter = firstParagraph.charAt(0);
  const firstParagraphRest = firstParagraph.slice(1);

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
      {/* Top Main Article: Text on Left + Profile Image on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
        {/* Left Column (Span 7 / 8): Biography & Editorial */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
          <div>
            {/* Kicker */}
            <div className="text-xs-compact font-sans font-bold uppercase tracking-[0.2em] text-ink-primary border-b border-ink-rule pb-0.5 inline-block mb-1">
              {article.kicker}
            </div>

            {/* Main Headline */}
            <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase text-ink-primary leading-tight mb-2">
              {article.headline}
            </h3>

            {/* Sub-headline */}
            <h4 className="font-serif italic text-base sm:text-lg text-ink-body mb-2">
              {article.subheadline}
            </h4>

            {/* Biography Lead with DropCap */}
            <div className="mt-3 space-y-3 font-serif text-sm sm:text-base leading-relaxed text-ink-dark">
              <p className="newspaper-columns">
                <DropCap letter={firstLetter} />
                {firstParagraphRest}
              </p>

              {article.bioParagraphs.slice(1).map((paragraph, index) => (
                <p key={index} className="newspaper-columns">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="mt-6 pt-3 border-t-2 border-ink-rule flex flex-wrap items-center justify-between gap-2">
            <div className="font-serif italic text-xs text-ink-muted">
              &ldquo;{article.quote}&rdquo;
            </div>
            <div className="flex space-x-2">
              <a
                href={article.actions.emailUrl}
                className="px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                {article.actions.emailText}
              </a>
              <a
                href={article.actions.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-ink-rule bg-paper-white text-ink-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-ink-primary/10 transition-colors"
              >
                {article.actions.linkedinText}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (Span 5 / 4): Profile Photo Frame */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center">
          <ImageFrame
            src={profileImage.src}
            alt={profileImage.alt}
            aspectRatio={profileImage.aspectRatio}
            priority={profileImage.priority}
            objectFit="cover"
          />

          {/* Side Bio Card */}
          <div className="w-full mt-3 p-3 border border-ink-rule bg-paper-card space-y-1.5 text-xs font-serif">
            <div className="font-sans font-bold text-xs-compact uppercase tracking-wider text-ink-primary border-b border-ink-rule pb-0.5">
              {dossier.title}
            </div>
            {dossier.items.map((item, index) => (
              <div
                key={item.label}
                className={`flex justify-between ${
                  index < dossier.items.length - 1
                    ? "border-b border-dashed border-ink-rule/20 pb-0.5"
                    : ""
                }`}
              >
                <span className="text-ink-muted">{item.label}</span>
                <span className="font-bold text-ink-primary">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider type="double" />

      {/* Secondary 3-Column Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-ink-rule/25 pt-2">
        {/* Column 1: Engineering Philosophy */}
        <div className="pt-3 md:pt-0 md:pr-4 space-y-2">
          <h4 className="font-headline font-bold text-lg uppercase text-ink-primary border-b border-ink-rule pb-1">
            {manifesto.title}
          </h4>
          <p className="font-serif text-xs sm:text-sm leading-relaxed text-ink-dark newspaper-columns">
            {manifesto.description}
          </p>
          <ul className="font-serif text-xs space-y-1 text-ink-body pt-1">
            {manifesto.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Column 2: Continuous Improvement */}
        <div className="pt-3 md:pt-0 md:px-4 space-y-2">
          <h4 className="font-headline font-bold text-lg uppercase text-ink-primary border-b border-ink-rule pb-1">
            {refactoring.title}
          </h4>
          {refactoring.paragraphs.map((p, index) => (
            <p
              key={index}
              className="font-serif text-xs sm:text-sm leading-relaxed text-ink-dark newspaper-columns"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Column 3: Interests & Hobbies */}
        <div className="pt-3 md:pt-0 md:pl-4 space-y-2">
          <Card title={offDuty.title} badge={offDuty.badge} variant="boxed">
            <p className="newspaper-columns">{offDuty.description}</p>
            <div className="mt-2 text-xs-compact font-mono text-neutral-600">
              {offDuty.status}
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
