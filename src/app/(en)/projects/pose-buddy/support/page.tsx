import type { Metadata } from 'next'
import { PoseBuddySupport } from '@/components/pose-buddy/PoseBuddySupport'
import { JsonLd } from '@/components/seo/JsonLd'
import { simplePageGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import { poseBuddyPages } from '@/data/poseBuddyPages'

const page = poseBuddyPages.support

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  path: page.path,
  title: page.title.en,
  description: page.description.en,
  index: page.index,
})

export default function Page() {
  return (
    <>
      <JsonLd graph={simplePageGraph('en', page.path, page.title.en, page.trail('en'))} />
      <PoseBuddySupport />
    </>
  )
}
