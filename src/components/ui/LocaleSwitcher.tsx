'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from '@/i18n/useLocale'
import { counterpartPath } from '@/i18n/paths'

// One link that goes to the same page in the other language and names it, as
// in the design: on the Turkish site it reads "EN", on the English site "TR".
// A plain <a>, since the two languages have separate root layouts.
export function LocaleSwitcher() {
  const { locale } = useLocale()
  const pathname = usePathname() || '/'
  const other = locale === 'en' ? 'tr' : 'en'

  return (
    <a
      href={counterpartPath(pathname)}
      hrefLang={other}
      lang={other}
      aria-label={other === 'tr' ? 'TR, Türkçe' : 'EN, English'}
      className="inline-flex min-h-9 items-center rounded-md border border-slate-700 px-2.5 py-1.5 font-mono text-[13px] text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
    >
      {other.toUpperCase()}
    </a>
  )
}
