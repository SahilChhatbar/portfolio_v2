import type { Metadata } from 'next'
import Article from '@/components/content/Article'
import ImageFrame from '@/components/content/ImageFrame'
import Icon from '@/components/icons/Icon'
import PageContainer from '@/components/layout/PageContainer'
import Divider from '@/components/ui/Divider'
import { ICONS } from '@/constants/icons'
import { PROJECTS_DATA, type ProjectItem } from './data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Engineering projects and full-stack software creations built by Sahil Chhatbar.',
}

interface SecondaryProjectCardProps {
  project: ProjectItem
  className?: string
  defaultWireTag?: string
}

function SecondaryProjectCard({
  project,
  className = '',
  defaultWireTag,
}: SecondaryProjectCardProps) {
  return (
    <article className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
          {project.wireTag || defaultWireTag || 'PROJECT DISPATCH'}
        </span>
        <span className="bg-ink-rule h-px flex-1"></span>
      </div>

      <h3 className="font-headline text-ink-primary text-2xl leading-tight font-black uppercase sm:text-3xl">
        {project.leadHeadline}
      </h3>

      {project.subtitle && (
        <h4 className="text-ink-subtle font-serif text-sm italic">{project.subtitle}</h4>
      )}

      {/* Project Image */}
      {project.image && (
        <ImageFrame
          src={project.image}
          alt={project.imageAlt}
          aspectRatio="landscape"
          loading="eager"
        />
      )}

      <div className="text-ink-dark space-y-2 font-serif text-sm leading-relaxed">
        {project.description && <p className="newspaper-columns">{project.description}</p>}
        {project.fullStory?.map((paragraph, i) => (
          <p
            key={i}
            className="newspaper-columns"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="border-ink-rule/30 border-t border-dashed pt-2">
          <div className="text-xs-compact text-ink-subtle mb-1 font-sans font-bold tracking-wider uppercase">
            TECH STACK:
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border-ink-rule bg-paper-white text-ink-primary border px-2 py-0.5 font-sans text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.githubUrl || project.liveUrl) && (
        <div className="border-ink-rule flex flex-wrap gap-2 border-t pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
            >
              <span>VIEW ON GITHUB</span>
              <Icon
                icon={ICONS.externalLink}
                className="h-3.5 w-3.5"
              />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-ink-rule bg-paper-white text-ink-primary font-headline hover:bg-ink-primary/10 inline-flex items-center space-x-1.5 border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>VISIT SITE</span>
              <Icon
                icon={ICONS.externalLink}
                className="h-3.5 w-3.5"
              />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function ProjectsPage() {
  const { meta, projects, githubSection } = PROJECTS_DATA
  const featuredProject = projects.find((p) => p.priority) || projects[0]
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject?.id)

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
      {/* Featured Lead Project (Full Broadsheet Lead) */}
      {featuredProject && (
        <div className="pb-6">
          <Article
            kicker={featuredProject.kicker || 'FEATURED PROJECT • FULL-STACK APP'}
            headline={featuredProject.leadHeadline}
            subheadline={featuredProject.subtitle}
            paragraphs={[featuredProject.description, ...featuredProject.fullStory]}
            imageSrc={featuredProject.image}
            imageAlt={featuredProject.imageAlt}
            imagePriority={featuredProject.priority ?? true}
            tags={featuredProject.tags}
            primaryLink={
              featuredProject.githubUrl
                ? {
                    text: 'VIEW ON GITHUB',
                    href: featuredProject.githubUrl,
                    external: true,
                  }
                : undefined
            }
            secondaryLink={
              featuredProject.liveUrl
                ? {
                    text: 'VISIT SITE',
                    href: featuredProject.liveUrl,
                    external: true,
                  }
                : undefined
            }
          />
        </div>
      )}

      <Divider type="double" />

      {/* Secondary Projects: Asymmetric Broadsheet Layout */}
      {secondaryProjects.length > 0 && (
        <div className="divide-ink-rule/25 grid grid-cols-1 gap-6 divide-y py-4 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {secondaryProjects.map((project, index) => {
            const isFirst = index === 0
            return (
              <SecondaryProjectCard
                key={project.id}
                project={project}
                defaultWireTag={`PROJECT 0${index + 2}`}
                className={`lg:col-span-6 ${isFirst ? 'lg:pr-6' : 'pt-6 lg:pt-0 lg:pl-6'}`}
              />
            )
          })}
        </div>
      )}

      <Divider type="single" />

      {/* Bottom GitHub Repositories Banner */}
      <div className="bg-paper-card border-ink-rule flex flex-col items-start justify-between gap-4 border-2 p-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="text-xs-compact text-ink-primary font-sans font-bold tracking-wider uppercase">
            {githubSection.tag}
          </div>
          <h4 className="font-headline text-ink-primary text-base font-bold uppercase">
            {githubSection.headline}
          </h4>
          <p className="text-ink-body font-serif text-xs">{githubSection.description}</p>
        </div>

        <a
          href={githubSection.actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink-primary text-paper-bg font-headline inline-flex shrink-0 items-center space-x-1.5 px-4 py-2 text-xs font-bold tracking-wider whitespace-nowrap uppercase transition-colors hover:bg-neutral-800"
        >
          <span>{githubSection.actionText}</span>
          <Icon
            icon={ICONS.externalLink}
            className="h-3.5 w-3.5"
          />
        </a>
      </div>
    </PageContainer>
  )
}
