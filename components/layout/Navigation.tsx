'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'ABOUT ME', href: '/' },
  { name: 'EXPERIENCE', href: '/experience' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'CAREER & EDUCATION', href: '/career' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Reset menu open state on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setIsOpen(false)
  }

  // Handle outside click, escape key, and body scroll lock
  useEffect(() => {
    if (!isOpen) return

    // Lock body scroll when mobile drawer is open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, {
      passive: true,
    })

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  const activeItem = NAV_ITEMS.find((item) =>
    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href),
  )

  return (
    <>
      {/* Desktop Navigation Ribbon (sm+) */}
      <nav className="bg-paper-bg border-ink-rule relative z-30 my-1 hidden w-full border-t-2 border-b-2 sm:flex">
        <div className="flex flex-1 items-center justify-center px-2">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`lg:text-nav font-headline flex items-center justify-center px-3 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-all lg:px-4 ${
                  isActive
                    ? 'bg-ink-primary text-paper-bg'
                    : 'text-ink-primary hover:bg-ink-primary/10 hover:text-ink-black'
                }`}
              >
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Header Bar with Hamburger Button (<sm) */}
      <div className="bg-paper-bg border-ink-rule relative z-30 my-1 flex w-full items-center justify-between border-t-2 border-b-2 px-3 py-1.5 sm:hidden">
        {/* Active Page Indicator */}
        <div className="flex min-w-0 items-baseline space-x-2">
          <span className="font-headline text-ink-primary text-xs leading-none font-black tracking-widest uppercase">
            PAGE:
          </span>
          <span className="text-2xs text-ink-dark truncate font-mono leading-none tracking-wider uppercase italic">
            {activeItem ? activeItem.name : 'NAV'}
          </span>
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation-drawer"
          className="border-ink-rule/30 bg-paper-white hover:bg-ink-primary/10 active:bg-ink-primary active:text-paper-bg flex items-center justify-center border p-2 transition-colors select-none"
        >
          {/* Animated Hamburger / Close Icon */}
          <div
            className="flex h-3.5 w-4 flex-col justify-between"
            aria-hidden="true"
          >
            <span
              className={`bg-ink-primary block h-0.5 w-full transform rounded-xs transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`bg-ink-primary block h-0.5 w-full rounded-xs transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`bg-ink-primary block h-0.5 w-full transform rounded-xs transition-all duration-300 ease-in-out ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Backdrop & Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 sm:hidden ${
          isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Backdrop Overlay */}
        <div
          className={`bg-ink-black/50 absolute inset-0 backdrop-blur-xs transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-over Panel */}
        <div
          ref={drawerRef}
          id="mobile-navigation-drawer"
          className={`bg-paper-bg border-ink-rule absolute inset-y-0 right-0 flex w-[82%] max-w-xs flex-col border-l-2 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Bar */}
          <div className="border-ink-rule bg-paper-aged/60 flex items-center justify-between border-b px-4 py-3">
            <div className="flex flex-col">
              <span className="font-headline text-ink-primary text-xs font-black tracking-widest uppercase">
                DIRECTORY
              </span>
              <span className="text-3xs text-ink-muted font-mono tracking-wider uppercase">
                TABLE OF CONTENTS
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              className="border-ink-rule/40 hover:bg-ink-primary hover:text-paper-bg text-ink-primary flex h-8 w-8 items-center justify-center border font-mono text-sm font-bold transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="divide-ink-rule/20 flex-1 divide-y overflow-y-auto px-3 py-3">
            {NAV_ITEMS.map((item, index) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              const sectionNumber = String(index + 1).padStart(2, '0')

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between px-3 py-3 transition-colors ${
                    isActive
                      ? 'bg-ink-primary text-paper-bg'
                      : 'text-ink-primary active:bg-ink-primary/20 hover:bg-ink-primary/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-2xs font-mono font-bold tracking-widest ${
                        isActive ? 'text-paper-bg/70' : 'text-ink-muted group-hover:text-ink-black'
                      }`}
                    >
                      {sectionNumber}
                    </span>
                    <span className="font-headline text-xs font-bold tracking-wider uppercase">
                      {item.name}
                    </span>
                  </div>

                  {isActive ? (
                    <span
                      className="text-xs-compact font-bold"
                      aria-hidden="true"
                    >
                      ●
                    </span>
                  ) : (
                    <span
                      className="text-2xs text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Drawer Newspaper Footer */}
          <div className="border-ink-rule bg-paper-card border-t p-4 text-center">
            <div className="newspaper-double-border text-3xs text-ink-dark py-1 font-mono tracking-widest uppercase">
              SAHIL CHHATBAR • PORTFOLIO
            </div>
            <div className="text-3xs text-ink-muted mt-2 font-sans tracking-wider uppercase">
              AHMEDABAD, GUJARAT, INDIA
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
