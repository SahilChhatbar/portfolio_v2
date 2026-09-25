import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Card from "@/components/content/Card";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";
import { CONTACT_DATA } from "./data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact details and professional profiles for Sahil K. Chhatbar.",
};

export default function ContactPage() {
  const {
    meta,
    banner,
    directoryTag,
    channels,
    editorialQuote,
    telemetryTag,
    telemetry,
    cvBox,
  } = CONTACT_DATA;

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
      <div className="border-b-2 border-ink-rule pb-3 mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs font-sans uppercase tracking-wider text-ink-subtle mb-1">
          <span className="font-bold text-ink-primary">{banner.openWireTag}</span>
          <span>{banner.dispatchTag}</span>
        </div>
        <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase text-ink-primary leading-tight">
          {banner.headline}
        </h3>
        <p className="font-serif italic text-sm sm:text-base text-ink-subtle mt-1">
          {banner.subtitle}
        </p>
      </div>

      {/* Main 2-Column Broad Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-ink-rule/25">
        {/* Left Column (Span 7): Official Classified Direct Wire Channels */}
        <div className="lg:col-span-7 lg:pr-6 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
              {directoryTag}
            </span>
            <span className="h-px flex-1 bg-ink-rule"></span>
          </div>

          <div className="divide-y divide-ink-rule/20 border-t border-b border-ink-rule bg-paper-white">
            {channels.map((link) => (
              <div
                key={link.platform}
                className="py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-paper-card transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 border border-ink-rule bg-white">
                    <Icon icon={link.icon} className="w-5 h-5 text-ink-primary" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xs uppercase tracking-wider text-ink-primary">
                      {link.label}
                    </div>
                    <div className="font-serif text-xs text-ink-muted">
                      {link.handle}
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center space-x-1 px-3 py-1.5 bg-ink-primary text-paper-bg text-xs font-headline font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    <span>OPEN LINK</span>
                    <Icon icon={ICONS.externalLink} className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Quote Box */}
          <div className="p-4 border-2 border-ink-rule bg-paper-card text-center space-y-1">
            <div className="font-headline font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-primary">
              {editorialQuote.headline}
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-ink-subtle">
              {editorialQuote.subheadline}
            </p>
          </div>
        </div>

        {/* Right Column (Span 5): Availability & Details */}
        <div className="lg:col-span-5 lg:pl-6 pt-6 lg:pt-0 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-ink-primary text-paper-card px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
              {telemetryTag}
            </span>
            <span className="h-px flex-1 bg-ink-rule"></span>
          </div>

          {/* Availability Details Box */}
          <div className="p-4 border-2 border-ink-rule bg-paper-white space-y-3">
            <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-primary border-b border-ink-rule pb-1">
              AVAILABILITY &amp; LOCATION DETAILS
            </div>

            <div className="space-y-2 text-xs font-serif">
              <div className="flex justify-between border-b border-dashed border-ink-rule/20 pb-1">
                <span className="text-ink-muted">LOCATION:</span>
                <span className="font-bold text-ink-primary">
                  {telemetry.address}
                </span>
              </div>

              <div className="flex justify-between border-b border-dashed border-ink-rule/20 pb-1">
                <span className="text-ink-muted">TIMEZONE:</span>
                <span className="font-bold text-ink-primary">
                  {telemetry.timezone}
                </span>
              </div>

              <div className="flex justify-between border-b border-dashed border-ink-rule/20 pb-1">
                <span className="text-ink-muted">RESPONSE TIME:</span>
                <span className="font-bold text-ink-primary">
                  {telemetry.responseTime}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-ink-muted">AVAILABILITY:</span>
                <span className="font-bold text-emerald-800">
                  {telemetry.opportunities}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-ink-rule text-[11px] font-sans font-semibold text-ink-dark">
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
  );
}
