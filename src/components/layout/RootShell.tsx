import { IBM_Plex_Sans, Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/data/site'
import type { Locale } from '@/i18n/types'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipToContent } from '@/components/layout/SkipToContent'
import '@/app/globals.css'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-source-code-pro',
  display: 'swap',
  // Only labels use it; leave the preload slots to the text font and images.
  preload: false,
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

// The document both root layouts share: English at the root, Turkish under /tr.
export function RootShell({
  locale,
  showLocaleSwitcher = true,
  children,
}: {
  locale: Locale
  showLocaleSwitcher?: boolean
  children: React.ReactNode
}) {
  return (
    <html lang={locale} className={`${sourceCodePro.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <head>
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
      <body className="font-sans" suppressHydrationWarning>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LocaleProvider locale={locale}>
          <SkipToContent />
          <Header showLocaleSwitcher={showLocaleSwitcher} />
          <main id="main-content" tabIndex={-1} className="min-h-screen outline-none">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
