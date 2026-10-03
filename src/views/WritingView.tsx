import type { Metadata } from 'next'
import { WritingPageContent } from '@/components/writing/WritingPageContent'
import { JsonLd } from '@/components/seo/JsonLd'
import { writingGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import { articles } from '@/data/writing'
import type { Locale } from '@/i18n/types'

const copy = {
  title: {
    en: 'Writing by Burak Altıntaş — Frontend Engineering Articles',
    tr: 'Burak Altıntaş Yazıları — Frontend Mühendisliği',
  },
  description: {
    en: 'Articles by Burak Altıntaş on frontend engineering: product-minded development, React performance and virtualization, JavaScript dates, Redux-Saga and TanStack Query.',
    tr: "Burak Altıntaş'ın frontend mühendisliği yazıları: ürün odaklı geliştirme, React performansı ve sanallaştırma, JavaScript tarihleri, Redux-Saga ve TanStack Query.",
  },
}

export function writingMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    path: '/writing',
    title: copy.title[locale],
    description: copy.description[locale],
    absoluteTitle: true,
  })
}

export function WritingView({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd graph={writingGraph(locale, copy.title[locale], copy.description[locale], articles)} />
      <WritingPageContent />
    </>
  )
}
