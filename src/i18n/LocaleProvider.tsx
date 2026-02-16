'use client'

import { createContext, useState, useEffect, useCallback, ReactNode } from 'react'
import type { Locale } from './types'
import translations, { TranslationKey } from './translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('locale') as Locale | null
      if (saved === 'en' || saved === 'tr') {
        setLocaleState(saved)
      }
    } catch {}
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem('locale', newLocale)
    } catch {}
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] ?? key
    },
    [locale]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}
