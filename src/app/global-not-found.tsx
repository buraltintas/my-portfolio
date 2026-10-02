import type { Metadata, Viewport } from 'next'
import { RootShell } from '@/components/layout/RootShell'

export const viewport: Viewport = { themeColor: '#020617' }

// Next.js adds the noindex tag to this page itself.
export const metadata: Metadata = {
  title: 'Page Not Found | Burak Altıntaş',
}

// One 404 page serves both languages, so it speaks both.
export default function GlobalNotFound() {
  return (
    <RootShell locale="en" showLocaleSwitcher={false}>
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <p className="font-mono text-6xl font-bold text-slate-700 sm:text-7xl">404</p>
        <h1 className="text-2xl font-semibold text-white">Page not found</h1>
        <p className="max-w-md text-slate-400">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <p lang="tr" className="max-w-md text-slate-400">
          Aradığınız sayfa mevcut değil veya taşınmış.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {/* Plain links: the two languages have separate root layouts. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700"
          >
            Back to Home
          </a>
          <a
            href="/tr"
            lang="tr"
            hrefLang="tr"
            className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-5 text-slate-200 hover:border-slate-500 hover:text-white"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </RootShell>
  )
}
