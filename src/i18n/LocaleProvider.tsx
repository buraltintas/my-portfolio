'use client'

import { createContext, useCallback, ReactNode } from 'react'
import type { Locale } from './types'
import translations, { TranslationKey } from './translations'
import { localePath } from './paths'

interface LocaleContextValue {
  locale: Locale
  t: (key: TranslationKey) => string
  /** A site path in the current language, e.g. path('/projects'). */
  path: (href: string) => string
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: (key) => key,
  path: (href) => href,
})

// The language comes from the URL (English at the root, Turkish under /tr),
// so every page is rendered in its final language at build time.
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = useCallback((key: TranslationKey): string => translations[locale][key] ?? key, [locale])
  const path = useCallback((href: string) => localePath(locale, href), [locale])

  return <LocaleContext.Provider value={{ locale, t, path }}>{children}</LocaleContext.Provider>
}
