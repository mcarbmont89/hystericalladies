'use client'
import Link from 'next/link'
import { useState } from 'react'
import type { NavLink } from '@/data/types'
import { langMeta } from '@/lib/i18n'
import type { Lang } from '@/data/types'

interface Props {
  links: NavLink[]
  currentLang: Lang
  currentPath: string
}

export default function NavBar({ links, currentLang, currentPath }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-nav bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-content mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo / brand */}
        <Link href={currentLang === 'fr' ? '/' : `/${currentLang}/`}
          className="font-display font-black italic text-xl text-text tracking-tight leading-none">
          The Hysterical<br />
          <span className="text-accent">Ladies</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              aria-current={currentPath === l.href ? 'page' : undefined}
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-[200ms] aria-[current=page]:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Language switcher + mobile toggle */}
        <div className="flex items-center gap-4">
          <nav aria-label="Langue" className="flex items-center gap-2">
            {(Object.keys(langMeta) as Lang[]).map(lang => (
              <Link key={lang} href={langMeta[lang].href}
                hrefLang={langMeta[lang].hreflang}
                aria-current={currentLang === lang ? 'true' : undefined}
                className="text-xs font-semibold text-muted hover:text-text transition-colors duration-[200ms] aria-[current=true]:text-accent">
                {langMeta[lang].label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-text">
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-[200ms] ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity duration-[200ms] ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-[200ms] ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden absolute top-nav left-0 right-0 bg-bg border-b border-border py-6 px-6">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-6">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                aria-current={currentPath === l.href ? 'page' : undefined}
                className="text-lg font-semibold text-muted hover:text-text aria-[current=page]:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
