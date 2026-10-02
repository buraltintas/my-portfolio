'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher'

export function Header() {
  const { t } = useLocale()
  const [mobileOpen, setMobileOpen] = useState(false)

  // The name is the link home, so the menu holds only what is not there.
  const navLinks = [
    { href: '/projects', label: t('nav.projects') },
    { href: '/#contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-ink/90 backdrop-blur-md">
      <nav className="shell flex h-[68px] items-center justify-between gap-4" aria-label={t('nav.label')}>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-mono text-[17px] font-semibold text-slate-50"
        >
          burak altintas
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 text-[15px] md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="px-2.5 py-2.5 text-slate-300 transition-colors hover:text-white">
              {label}
            </Link>
          ))}
          <div className="pl-2">
            <LocaleSwitcher />
          </div>
        </div>

        {/* Mobile: the language button stays in the bar, the links fold into a menu. */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
            aria-label={t('nav.menu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-0.5 w-6 bg-slate-300 transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-slate-300 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-slate-300 transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-slate-800 bg-ink md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center text-lg text-slate-300 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
