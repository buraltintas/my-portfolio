'use client'

import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArticleList } from '@/components/writing/ArticleList'
import { articles } from '@/data/writing'

export function LatestWriting() {
  const { t, path } = useLocale()

  return (
    <section className="shell flex flex-col gap-6 pt-[clamp(72px,10vw,120px)]" aria-labelledby="writing">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <SectionHeading title={t('writing.latest')} id="writing" />
        <Link href={path('/writing')} className="inline-flex min-h-11 items-center text-[15px] font-medium text-blue-400 hover:text-blue-300">
          {t('writing.viewAll')}
          <span aria-hidden="true">&nbsp;→</span>
        </Link>
      </div>
      <ArticleList articles={articles.slice(0, 3)} />
    </section>
  )
}
