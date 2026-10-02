import type { Metadata, Viewport } from 'next'
import { RootShell } from '@/components/layout/RootShell'
import { layoutMetadata } from '@/lib/seo'

export const viewport: Viewport = { themeColor: '#020617' }

export const metadata: Metadata = layoutMetadata('en')

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>
}
