'use client'

import { useLocale } from '@/i18n/useLocale'
import type { Article } from '@/data/writing'

// UTC, so the server render and the browser agree on the day.
function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

interface ArticleListProps {
  articles: Article[]
  /** h2 on the writing page, under its h1; h3 inside a home section. */
  headingLevel?: 2 | 3
}

export function ArticleList({ articles, headingLevel = 3 }: ArticleListProps) {
  const { locale, t } = useLocale()
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <ol className="flex flex-col">
      {articles.map((article) => (
        <li key={article.url} className="flex flex-wrap gap-x-7 border-t border-slate-800 py-6">
          <time dateTime={article.date} className="w-full pb-2 font-mono text-[13px] text-slate-400 sm:w-[150px] sm:shrink-0">
            {formatDate(article.date, locale)}
          </time>
          <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-2">
            <Heading className="text-[19px] font-semibold leading-[1.35] text-slate-50">
              {/* The articles are in English, on the Turkish pages too. */}
              <a href={article.url} target="_blank" rel="noopener" lang="en" className="hover:text-blue-300">
                {article.title}
                <span aria-hidden="true">&nbsp;↗</span>
              </a>
            </Heading>
            <p className="text-base leading-[1.6] text-slate-300">
              {article.summary[locale]}
            </p>
            <p className="font-mono text-[12.5px] text-slate-400">
              {article.topics.join(', ')} · {t('writing.source')}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
