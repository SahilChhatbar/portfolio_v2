import type { Metadata } from "next";
import NewspaperPage from "@/components/newspaper/NewspaperPage";
import Divider from "@/components/newspaper/Divider";
import Icon from "@/components/icons/Icon";
import { SKILLS_DATA } from "./data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Editorial directory of technical skills, frameworks, backend libraries, and AI tooling mastered by Sahil K. Chhatbar.",
};

export default function SkillsPage() {
  const { meta, intro, categories, takeaway } = SKILLS_DATA;

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
      {/* Editorial Introduction */}
      <div className="border-b-2 border-ink-rule pb-3 mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs font-sans uppercase tracking-wider text-ink-subtle mb-1">
          <span className="font-bold text-ink-primary">{intro.indexTag}</span>
          <span>{intro.dispatchTag}</span>
        </div>
        <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-ink-primary leading-tight">
          {intro.headline}
        </h3>
        <p className="font-serif italic text-sm sm:text-base text-ink-subtle mt-1">
          {intro.subtitle}
        </p>
      </div>

      {/* Grid of Skill Categories in Editorial Multi-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 divide-y md:divide-y-0">
        {categories.map((cat, idx) => (
          <div
            key={cat.category}
            className={`flex flex-col justify-between border border-ink-rule bg-paper-white p-4 shadow-2xs ${
              idx > 0 ? "pt-4 md:pt-4" : ""
            }`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b-2 border-ink-rule pb-1.5 mb-2">
                <h4 className="font-headline font-black text-lg uppercase text-ink-primary tracking-wide">
                  {cat.category}
                </h4>
                <span className="text-[10px] font-sans font-bold bg-ink-primary text-paper-card px-1.5 py-0.5 uppercase">
                  {cat.skills.length} ITEMS
                </span>
              </div>

              {/* Description */}
              <p className="font-serif text-xs text-ink-subtle leading-snug mb-3">
                {cat.description}
              </p>

              {/* Skills Items List */}
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2 border border-ink-rule/20 bg-paper-card hover:bg-white transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon icon={skill.icon} className="w-4 h-4 text-ink-primary" />
                        <span className="font-sans font-bold text-xs uppercase text-ink-primary">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span className="text-[10px] font-mono font-semibold uppercase text-neutral-600 bg-paper-white px-1.5 py-0.5 border border-ink-rule/20">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.note && (
                      <p className="font-serif text-[11px] text-ink-muted mt-1 pl-6">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4 pt-2 border-t border-dashed border-ink-rule/30 text-right">
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light">
                STATUS: VERIFIED
              </span>
            </div>
          </div>
        ))}
      </div>

      <Divider type="ornamental" />

      {/* Editorial Skill Summary Notice */}
      <div className="p-4 bg-paper-card border-2 border-ink-rule grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-1">
          <div className="font-sans font-bold text-[10px] uppercase tracking-wider text-ink-primary">
            {takeaway.kicker}
          </div>
          <h4 className="font-headline font-bold text-base uppercase text-ink-primary">
            {takeaway.headline}
          </h4>
          <p className="font-serif text-xs leading-relaxed text-ink-body newspaper-columns">
            {takeaway.description}
          </p>
        </div>

        <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-ink-rule/30 pt-3 md:pt-0 md:pl-4 flex flex-col justify-center">
          <div className="text-xs font-serif italic text-ink-subtle mb-2">
            &ldquo;{takeaway.quote}&rdquo;
          </div>
          <div className="text-[10px] font-mono text-ink-light">
            {takeaway.versionNote}
          </div>
        </div>
      </div>
    </NewspaperPage>
  );
}
