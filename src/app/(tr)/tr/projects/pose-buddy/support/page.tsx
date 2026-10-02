import type { Metadata } from 'next'
import { PoseBuddySupport } from '@/components/pose-buddy/PoseBuddySupport'
import { JsonLd } from '@/components/seo/JsonLd'
import { simplePageGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import { poseBuddyPages } from '@/data/poseBuddyPages'

const page = poseBuddyPages.support

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
      <PoseBuddySupport />
    </>
  )
}
