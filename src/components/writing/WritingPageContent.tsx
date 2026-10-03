'use client'

import { useLocale } from '@/i18n/useLocale'
import { ArticleList } from '@/components/writing/ArticleList'
import { articles } from '@/data/writing'

export function WritingPageContent() {
  const { t } = useLocale()

  return (
    <div className="shell flex flex-col gap-10 pb-[clamp(56px,8vw,88px)] pt-[clamp(40px,6vw,72px)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[clamp(34px,5vw,48px)] font-bold leading-[1.08] tracking-[-0.02em] text-slate-50">
          {t('writing.title')}
        </h1>
        <p className="max-w-[680px] text-lg text-slate-400">{t('writing.intro')}</p>
      </div>
      <ArticleList articles={articles} headingLevel={2} />
    </div>
  )
}
