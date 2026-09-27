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
  const mobileNavRef = useRef<HTMLDivElement>(null)

  // Reset menu open state on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setIsOpen(false)
  }

  // Smoothly collapse menu on outside click or scroll elsewhere
  useEffect(() => {
    if (!isOpen) return

    const handleScroll = () => {
      setIsOpen(false)
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
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

      {/* Mobile Pages Navigation (<sm) */}
      <div
        ref={mobileNavRef}
        className="bg-paper-bg border-ink-rule relative z-30 my-1 w-full border-t-2 border-b-2 sm:hidden"
      >
        {/* Toggle Bar */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse pages menu' : 'Expand pages menu'}
          className="font-headline text-ink-primary bg-paper-bg hover:bg-ink-primary/5 flex w-full cursor-pointer touch-manipulation items-center justify-between px-3 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-colors select-none"
        >
          <div className="flex items-center space-x-2">
            <span className="font-black">PAGES</span>
            {activeItem && (
              <span className="text-2xs text-ink-muted border-ink-rule/30 border-l pl-2 font-mono">
                {activeItem.name}
              </span>
            )}
          </div>

          <span
            className={`text-2xs text-ink-primary inline-block transform transition-transform duration-200 ease-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>

        {/* Smoothly Collapsible Mobile Page Items */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? 'border-ink-rule grid-rows-[1fr] border-t opacity-100'
              : 'pointer-events-none grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <nav className="divide-ink-rule/15 bg-paper-white divide-y">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-headline flex touch-manipulation items-center justify-between px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'bg-ink-primary text-paper-bg'
                        : 'text-ink-primary active:bg-ink-primary/20 hover:bg-ink-primary/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="text-xs-compact">●</span>}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
