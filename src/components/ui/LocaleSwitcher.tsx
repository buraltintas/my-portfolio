'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from '@/i18n/useLocale'
import Image from 'next/image'
import type { Locale } from '@/i18n/types'

const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '/images/eng.png' },
  { code: 'tr', label: 'TR', flag: '/images/tr.png' },
]

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-2.5 py-1.5 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
        aria-label="Change language"
      >
        <Image src={current.flag} alt="" width={18} height={18} className="rounded-sm" />
        <span>{current.label}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-1 min-w-[100px] overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-xl md:left-auto md:right-0 md:top-full md:bottom-auto md:mt-1 md:mb-0">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-slate-800 ${
                l.code === locale ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              <Image src={l.flag} alt="" width={18} height={18} className="rounded-sm" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
