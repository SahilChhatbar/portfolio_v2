import type { Metadata } from 'next'
import Icon from '@/components/icons/Icon'
import PageContainer from '@/components/layout/PageContainer'
import Divider from '@/components/ui/Divider'
import { SKILLS_DATA } from './data/skills'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Editorial directory of technical skills, frameworks, backend libraries, and AI tooling mastered by Sahil Chhatbar.',
}

export default function SkillsPage() {
  const { meta, intro, categories, takeaway } = SKILLS_DATA

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
      {/* Editorial Introduction */}
      <div className="border-ink-rule mb-6 border-b-2 pb-3">
        <div className="text-ink-subtle mb-1 flex flex-wrap items-center justify-between font-sans text-xs tracking-wider uppercase">
          <span className="text-ink-primary font-bold">{intro.indexTag}</span>
          <span>{intro.dispatchTag}</span>
        </div>
        <h3 className="font-headline text-ink-primary text-2xl leading-tight font-black uppercase sm:text-3xl">
          {intro.headline}
        </h3>
        <p className="text-ink-subtle mt-1 font-serif text-sm italic sm:text-base">
          {intro.subtitle}
        </p>
      </div>

      {/* Grid of Skill Categories in Editorial Multi-Column Layout */}
      <div className="grid grid-cols-1 gap-6 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <div
            key={cat.category}
            className={`border-ink-rule bg-paper-white flex flex-col justify-between border p-4 shadow-2xs ${
              idx > 0 ? 'pt-4 md:pt-4' : ''
            }`}
          >
            <div>
              {/* Category Header */}
              <div className="border-ink-rule mb-2 border-b-2 pb-1.5">
                <h4 className="font-headline text-ink-primary text-lg font-black tracking-wide uppercase">
                  {cat.category}
                </h4>
              </div>

              {/* Description */}
              <p className="text-ink-subtle mb-3 font-serif text-xs leading-snug">
                {cat.description}
              </p>

              {/* Skills Items List */}
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="border-ink-rule/20 bg-paper-card border p-2 transition-colors hover:bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon
                          icon={skill.icon}
                          className="text-ink-primary h-4 w-4"
                        />
                        <span className="text-ink-primary font-sans text-xs font-bold uppercase">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span className="text-xs-compact bg-paper-white border-ink-rule/20 border px-1.5 py-0.5 font-mono font-semibold text-neutral-600 uppercase">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.note && (
                      <p className="text-fine text-ink-muted mt-1 pl-6 font-serif">{skill.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider type="ornamental" />

      {/* Editorial Skill Summary Notice */}
      <div className="bg-paper-card border-ink-rule grid grid-cols-1 gap-4 border-2 p-4 md:grid-cols-3">
        <div className="space-y-1 md:col-span-2">
          <div className="text-xs-compact text-ink-primary font-sans font-bold tracking-wider uppercase">
            {takeaway.kicker}
          </div>
          <h4 className="font-headline text-ink-primary text-base font-bold uppercase">
            {takeaway.headline}
          </h4>
          <p className="text-ink-body newspaper-columns font-serif text-xs leading-relaxed">
            {takeaway.description}
          </p>
        </div>

        <div className="border-ink-rule/30 flex flex-col justify-center border-t pt-3 md:col-span-1 md:border-t-0 md:border-l md:pt-0 md:pl-4">
          <div className="text-ink-subtle mb-2 font-serif text-xs italic">
            &ldquo;{takeaway.quote}&rdquo;
          </div>
          <div className="text-xs-compact text-ink-light font-mono">{takeaway.versionNote}</div>
        </div>
      </div>
    </PageContainer>
  )
}
