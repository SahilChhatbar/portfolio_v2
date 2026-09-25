import Icon from "@/components/icons/Icon";
import { PROFILE } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/social";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full mt-10 pt-4 border-t-4 border-ink-rule bg-paper-bg select-none text-left">
      {/* Top Index Columns */}
      <div className="flex flex-wrap gap-6 sm:gap-12 pb-6 border-b border-ink-rule">
        {/* Col 1: About */}
        <div className="space-y-2">
          <h4 className="font-headline font-black text-base uppercase text-ink-primary tracking-wide">
            {PROFILE.name}
          </h4>
          <p className="font-serif text-xs leading-relaxed text-ink-subtle">
            Full-stack software engineer building performant, accessible, and
            scalable web applications with React, Next.js, and TypeScript.
          </p>
        </div>

        {/* Col 2: Navigation Index */}
        <div className="space-y-2">
          <h4 className="font-sans font-bold text-xs uppercase tracking-[0.16em] text-ink-primary border-b border-ink-rule/30 pb-1">
            NAVIGATION
          </h4>
          <ul className="space-y-1 text-xs font-serif">
            <li>
              <Link href="/" className="hover:underline text-ink-dark">
                Page 1 • About Me
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="hover:underline text-ink-dark"
              >
                Page 2 • Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline text-ink-dark">
                Page 3 • Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:underline text-ink-dark">
                Page 4 • Skills
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:underline text-ink-dark">
                Page 5 • Career &amp; Education
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-ink-dark">
                Page 6 • Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Social & Links */}
        <div className="space-y-2">
          <h4 className="font-sans font-bold text-xs uppercase tracking-[0.16em] text-ink-primary border-b border-ink-rule/30 pb-1">
            LINKS &amp; PROFILES
          </h4>
          <ul className="space-y-1.5 text-xs font-serif">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.platform}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-ink-dark hover:text-ink-black hover:underline"
                >
                  <Icon icon={link.icon} className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
