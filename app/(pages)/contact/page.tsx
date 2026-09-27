import type { Metadata } from 'next'
import Card from '@/components/content/Card'
import Icon from '@/components/icons/Icon'
import PageContainer from '@/components/layout/PageContainer'
import { ICONS } from '@/constants/icons'
import { CONTACT_DATA } from './data/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Direct contact details and professional profiles for Sahil Chhatbar.',
}

export default function ContactPage() {
  const { meta, banner, directoryTag, channels, editorialQuote, telemetryTag, telemetry, cvBox } =
    CONTACT_DATA

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
      {/* Banner Lead */}
      <div className="border-ink-rule mb-6 border-b-2 pb-3">
        <div className="text-ink-subtle mb-1 flex flex-wrap items-center justify-between font-sans text-xs tracking-wider uppercase">
          <span className="text-ink-primary font-bold">{banner.openWireTag}</span>
          <span>{banner.dispatchTag}</span>
        </div>
        <h3 className="font-headline text-ink-primary text-2xl leading-tight font-black uppercase sm:text-4xl">
          {banner.headline}
        </h3>
        <p className="text-ink-subtle mt-1 font-serif text-sm italic sm:text-base">
          {banner.subtitle}
        </p>
      </div>

      {/* Main 2-Column Broad Layout */}
      <div className="divide-ink-rule/25 grid grid-cols-1 gap-6 divide-y lg:grid-cols-12 lg:divide-x lg:divide-y-0">
        {/* Left Column (Span 7): Official Classified Direct Wire Channels */}
        <div className="space-y-4 lg:col-span-7 lg:pr-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
              {directoryTag}
            </span>
            <span className="bg-ink-rule h-px flex-1"></span>
          </div>

          <div className="divide-ink-rule/20 border-ink-rule bg-paper-white divide-y border-t border-b">
            {channels.map((link) => {
              const isPhone = link.platform === 'Phone'
              return (
                <div
                  key={link.platform}
                  className="hover:bg-paper-card flex flex-col justify-between gap-2 px-2 py-3 transition-colors sm:flex-row sm:items-center"
                >
                  <div className="flex items-center space-x-3">
                    <div className="border-ink-rule border bg-white p-2">
                      <Icon
                        icon={link.icon}
                        className="text-ink-primary h-5 w-5"
                      />
                    </div>
                    <div>
                      <div className="text-ink-primary font-sans text-xs font-bold tracking-wider uppercase">
                        {link.label}
                      </div>
                      {!isPhone && (
                        <div className="text-ink-muted font-serif text-xs">{link.handle}</div>
                      )}
                    </div>
                  </div>
                  <div>
                    {isPhone ? (
                      <a
                        href={link.url}
                        className="text-ink-primary px-1 py-0.5 font-mono text-sm font-bold tracking-wide hover:underline sm:text-base"
                      >
                        {link.handle}
                      </a>
                    ) : (
                      <a
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
                      >
                        <span>OPEN LINK</span>
                        <Icon
                          icon={ICONS.externalLink}
                          className="h-3.5 w-3.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Editorial Quote Box */}
          <div className="border-ink-rule bg-paper-card space-y-1 border-2 p-4 text-center">
            <div className="font-headline text-ink-primary text-xl font-black tracking-tight uppercase sm:text-2xl">
              {editorialQuote.headline}
            </div>
            <p className="text-ink-subtle font-serif text-xs italic sm:text-sm">
              {editorialQuote.subheadline}
            </p>
          </div>
        </div>

        {/* Right Column (Span 5): Availability & Details */}
        <div className="space-y-6 pt-6 lg:col-span-5 lg:pt-0 lg:pl-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card text-xs-compact px-2 py-0.5 font-sans font-bold tracking-widest uppercase">
              {telemetryTag}
            </span>
            <span className="bg-ink-rule h-px flex-1"></span>
          </div>

          {/* Availability Details Box */}
          <div className="border-ink-rule bg-paper-white space-y-3 border-2 p-4">
            <div className="text-xs-compact text-ink-primary border-ink-rule border-b pb-1 font-sans font-bold tracking-wider uppercase">
              AVAILABILITY &amp; LOCATION DETAILS
            </div>

            <div className="space-y-2 font-serif text-xs">
              <div className="border-ink-rule/20 flex justify-between border-b border-dashed pb-1">
                <span className="text-ink-muted">LOCATION:</span>
                <span className="text-ink-primary font-bold">{telemetry.address}</span>
              </div>

              <div className="border-ink-rule/20 flex justify-between border-b border-dashed pb-1">
                <span className="text-ink-muted">TIMEZONE:</span>
                <span className="text-ink-primary font-bold">{telemetry.timezone}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-ink-muted">RESPONSE TIME:</span>
                <span className="text-ink-primary font-bold">{telemetry.responseTime}</span>
              </div>
            </div>

            <div className="border-ink-rule text-fine text-ink-dark border-t pt-2 font-sans font-semibold">
              {telemetry.status}
            </div>
          </div>

          {/* Resume Quick Dispatch */}
          <Card
            title={cvBox.title}
            badge={cvBox.badge}
            action={{
              text: cvBox.actionText,
              href: cvBox.actionHref,
              external: true,
              icon: ICONS.download,
            }}
          >
            {cvBox.description}
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}
