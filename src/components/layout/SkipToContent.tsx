'use client'

import { useLocale } from '@/i18n/useLocale'

export function SkipToContent() {
  const { t } = useLocale()
  return (
    <a
      href="#main-content"
      className="fixed left-0 top-0 z-[100] -translate-y-full bg-blue-600 px-4 py-2 text-white transition-transform focus:translate-y-0"
    >
      {t('a11y.skip')}
    </a>
  )
}
