import type { Metadata } from "next";
import Link from "next/link";
import PortfolioPageFlip from "@/components/pageflip/PortfolioPageFlip";
import NewspaperImage from "@/components/newspaper/NewspaperImage";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCES } from "@/data/experience";
import { SKILL_CATEGORIES } from "@/data/skills";
import { EDUCATION, CAREER_MILESTONES } from "@/data/education";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/data/social";

export const metadata: Metadata = {
  title: "Interactive Page Flip Edition",
  description:
    "Interactive physical page-turn edition of Sahil K. Chhatbar's portfolio.",
};

export default function FlipEditionPage() {
  const [fitRep, radioVerse, cineScope] = PROJECTS;
  const [currentRole, internRole] = EXPERIENCES;

  return (
    <div className="w-full space-y-4">
      {/* Top Switcher Bar */}
      <div className="flex items-center justify-between bg-paper-white p-2 sm:p-3 border-2 border-ink-rule text-xs font-sans">
        <div className="flex items-center space-x-2">
          <span className="font-bold uppercase tracking-wider text-ink-primary">
            INTERACTIVE FLIPBOOK
          </span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-600">
            Interactive page turns
          </span>
        </div>

        <Link
          href="/"
          className="px-3 py-1 bg-ink-primary text-paper-bg text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center space-x-1"
        >
          <Icon icon={ICONS.arrowLeft} className="w-3.5 h-3.5" />
          <span>BACK TO WEB VIEW</span>
        </Link>
      </div>

      {/* The 6 Interactive Pages inside PortfolioPageFlip */}
      <PortfolioPageFlip>
        {/* PAGE 1: ABOUT ME */}
        <div className="space-y-3">
          <h3 className="font-headline font-black text-xl uppercase text-ink-primary leading-tight border-b border-ink-rule pb-1">
            FULL-STACK SOFTWARE ENGINEER
          </h3>
          <NewspaperImage
            src="/images/profile/profile-placeholder.jpg"
            alt="Sahil K. Chhatbar"
            caption="Sahil K. Chhatbar — Software Engineer & Builder."
            aspectRatio="portrait"
          />
          <p className="font-serif text-xs leading-relaxed text-ink-dark newspaper-columns">
            {PROFILE.bioParagraphs[0]}
          </p>
          <p className="font-serif text-xs leading-relaxed text-ink-dark newspaper-columns">
            {PROFILE.bioParagraphs[1]}
          </p>
        </div>

        {/* PAGE 2: EXPERIENCE */}
        <div className="space-y-3">
          <div className="border-b border-ink-rule pb-2">
            <div className="font-sans font-bold text-[10px] uppercase text-ink-primary">
              {currentRole.period} • {currentRole.type}
            </div>
            <h4 className="font-headline font-black text-lg uppercase text-ink-primary">
              {currentRole.company} — {currentRole.role}
            </h4>
            <p className="font-serif text-xs text-ink-body mt-1">
              {currentRole.highlights[0]}
            </p>
          </div>

          <div className="border-b border-ink-rule pb-2">
            <div className="font-sans font-bold text-[10px] uppercase text-ink-primary">
              {internRole.period} • {internRole.type}
            </div>
            <h4 className="font-headline font-black text-lg uppercase text-ink-primary">
              {internRole.company} — {internRole.role}
            </h4>
            <p className="font-serif text-xs text-ink-body mt-1">
              {internRole.highlights[0]}
            </p>
          </div>
        </div>

        {/* PAGE 3: PROJECTS */}
        <div className="space-y-3">
          <div className="p-2 border border-ink-rule bg-paper-card">
            <h4 className="font-headline font-bold text-sm uppercase text-ink-primary">
              1. {fitRep.title} — {fitRep.subtitle}
            </h4>
            <p className="font-serif text-[11px] text-ink-body mt-1">
              {fitRep.description}
            </p>
          </div>

          <div className="p-2 border border-ink-rule bg-paper-card">
            <h4 className="font-headline font-bold text-sm uppercase text-ink-primary">
              2. {radioVerse.title} — {radioVerse.subtitle}
            </h4>
            <p className="font-serif text-[11px] text-ink-body mt-1">
              {radioVerse.description}
            </p>
          </div>

          <div className="p-2 border border-ink-rule bg-paper-card">
            <h4 className="font-headline font-bold text-sm uppercase text-ink-primary">
              3. {cineScope.title} — {cineScope.subtitle}
            </h4>
            <p className="font-serif text-[11px] text-ink-body mt-1">
              {cineScope.description}
            </p>
          </div>
        </div>

        {/* PAGE 4: SKILLS */}
        <div className="space-y-2 text-xs font-serif">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="border-b border-dashed border-ink-rule/30 pb-1.5">
              <div className="font-sans font-bold text-[10px] uppercase text-ink-primary">
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {cat.skills.map((s) => (
                  <span key={s.name} className="px-1.5 py-0.5 text-[10px] font-sans border border-ink-rule/30 bg-paper-card text-ink-dark">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGE 5: CAREER & EDUCATION */}
        <div className="space-y-3">
          <div className="p-2 border border-ink-rule bg-paper-card space-y-1">
            <div className="font-sans font-bold text-[10px] uppercase text-ink-primary">
              EDUCATION
            </div>
            <div className="font-headline font-bold text-xs uppercase text-ink-primary">
              {EDUCATION[0].degree}
            </div>
            <div className="font-serif text-[11px] text-ink-subtle">
              {EDUCATION[0].institution} • {EDUCATION[0].year}
            </div>
          </div>

          <div className="space-y-2 pt-1">
            {CAREER_MILESTONES.slice(0, 3).map((m, i) => (
              <div key={i} className="border-l-2 border-ink-rule pl-2 text-xs font-serif">
                <div className="font-mono text-[10px] font-bold text-ink-primary">{m.year}</div>
                <div className="font-bold text-ink-primary">{m.headline}</div>
                <div className="text-ink-subtle text-[11px]">{m.summary}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE 6: CONTACT */}
        <div className="space-y-3">
          <h3 className="font-headline font-bold text-base uppercase text-ink-primary">
            GET IN TOUCH
          </h3>
          <div className="divide-y divide-ink-rule/30 border-t border-b border-ink-rule text-xs font-serif">
            {SOCIAL_LINKS.map((link) => (
              <div key={link.platform} className="py-1.5 flex items-center justify-between">
                <span className="font-bold text-ink-primary">{link.platform}:</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-ink-dark hover:underline"
                >
                  {link.handle}
                </a>
              </div>
            ))}
          </div>

          <div className="p-3 bg-ink-primary text-paper-bg text-center space-y-1">
            <div className="font-headline font-black text-sm uppercase">
              &ldquo;LET&apos;S BUILD SOMETHING GREAT.&rdquo;
            </div>
            <div className="text-[10px] font-serif text-neutral-300">
              {CONTACT_INFO.status}
            </div>
          </div>
        </div>
      </PortfolioPageFlip>
    </div>
  );
}
