import React from 'react'
import Link from 'next/link'
import Icon from '@/components/icons/Icon'
import { ICONS } from '@/constants/icons'

interface CardProps {
  title?: string
  badge?: string
  children: React.ReactNode
  action?: {
    text: string
    href: string
    external?: boolean
    icon?: string
  }
  variant?: 'boxed' | 'dark' | 'dashed' | 'ad'
  className?: string
}

export default function Card({
  title,
  badge,
  children,
  action,
  variant = 'boxed',
  className = '',
}: CardProps) {
  if (variant === 'dark') {
    return (
      <div className={`bg-ink-black text-paper-bg border-ink-rule border-2 p-4 ${className}`}>
        {badge && (
          <span className="bg-paper-bg text-ink-primary text-2xs mb-2 inline-block px-1.5 py-0.5 font-sans font-bold tracking-widest uppercase">
            {badge}
          </span>
        )}
        {title && (
          <h4 className="font-headline text-paper-bg mb-2 text-lg font-bold tracking-wide uppercase">
            {title}
          </h4>
        )}
        <div className="font-serif text-xs leading-relaxed text-neutral-300 sm:text-sm">
          {children}
        </div>
        {action && (
          <div className="mt-3 border-t border-neutral-700 pt-2">
            {action.external ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-headline text-paper-bg inline-flex items-center space-x-1 text-xs font-bold tracking-wider uppercase hover:underline"
              >
                <span>{action.text}</span>
                <Icon
                  icon={action.icon || ICONS.arrowRight}
                  className="h-3.5 w-3.5"
                />
              </a>
            ) : (
              <Link
                href={action.href}
                className="font-headline text-paper-bg inline-flex items-center space-x-1 text-xs font-bold tracking-wider uppercase hover:underline"
              >
                <span>{action.text}</span>
                <Icon
                  icon={action.icon || ICONS.arrowRight}
                  className="h-3.5 w-3.5"
                />
              </Link>
            )}
          </div>
        )}
      </div>
    )
  }

  const borderClass =
    variant === 'dashed' ? 'border-2 border-dashed border-ink-rule' : 'border-2 border-ink-rule'

  return (
    <div className={`bg-paper-card p-3 sm:p-4 ${borderClass} shadow-2xs ${className}`}>
      <div className="border-ink-rule mb-2 flex items-center justify-between border-b pb-1.5">
        {title && (
          <h4 className="font-headline text-ink-primary text-sm font-bold tracking-wide uppercase">
            {title}
          </h4>
        )}
        {badge && (
          <span className="bg-ink-primary text-paper-card text-2xs px-1.5 py-0.5 font-sans font-bold tracking-widest uppercase">
            {badge}
          </span>
        )}
      </div>

      <div className="text-ink-dark font-serif text-xs leading-relaxed">{children}</div>

      {action && (
        <div className="border-ink-rule/30 mt-3 flex justify-end border-t border-dashed pt-2">
          {action.external ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1 px-3 py-1 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
            >
              <span>{action.text}</span>
              <Icon
                icon={action.icon || ICONS.externalLink}
                className="h-3 w-3"
              />
            </a>
          ) : (
            <Link
              href={action.href}
              className="bg-ink-primary text-paper-bg font-headline inline-flex items-center space-x-1 px-3 py-1 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-neutral-800"
            >
              <span>{action.text}</span>
              <Icon
                icon={action.icon || ICONS.arrowRight}
                className="h-3 w-3"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
