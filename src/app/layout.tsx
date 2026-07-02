import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/data/site'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipToContent } from '@/components/layout/SkipToContent'
import './globals.css'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceCodePro.variable} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="google-adsense-account" content="ca-pub-7640689562014954" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7640689562014954"
          crossOrigin="anonymous"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteConfig.analytics.gtmId}');`}
        </Script>
        <Script
          id="ga-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.analytics.gaId}');`}
        </Script>
      </head>
      <body className="font-[family-name:var(--font-source-code-pro)]" suppressHydrationWarning>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LocaleProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="min-h-screen pt-16 md:pt-[73px]">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
