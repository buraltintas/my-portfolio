'use client'

import { useLocale } from '@/i18n/useLocale'

// One button that switches to the other language and names it, as in the
// design: on the Turkish site it reads "EN", on the English site "TR".
export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()
  const other = locale === 'en' ? 'tr' : 'en'

  return (
    <button
      type="button"
      lang={other}
      onClick={() => setLocale(other)}
      aria-label={other === 'tr' ? 'TR, Türkçe' : 'EN, English'}
      className="min-h-9 rounded-md border border-slate-700 px-2.5 py-1.5 font-mono text-[13px] text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
    >
      {other.toUpperCase()}
    </button>
  )
}
