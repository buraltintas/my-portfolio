import type { Metadata } from 'next'
import { ZtickyPage } from '@/components/zticky/ZtickyPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { simplePageGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import { ztickyPages } from '@/data/ztickyPages'

const page = ztickyPages.privacy

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  path: page.path,
  title: page.title.tr,
  description: page.description.tr,
  index: page.index,
})

export default function Page() {
  return (
    <>
      <JsonLd graph={simplePageGraph('tr', page.path, page.title.tr, page.trail('tr'))} />
      <ZtickyPage kind='privacy' />
    </>
  )
}
