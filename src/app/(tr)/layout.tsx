import type { Metadata, Viewport } from 'next'
import { RootShell } from '@/components/layout/RootShell'
import { layoutMetadata } from '@/lib/seo'

export const viewport: Viewport = { themeColor: '#020617' }

export const metadata: Metadata = layoutMetadata('tr')

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="tr">{children}</RootShell>
}
