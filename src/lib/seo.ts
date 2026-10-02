import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import type { Locale } from '@/i18n/types'
import { localePath } from '@/i18n/paths'

export const ogLocale: Record<Locale, string> = { en: 'en_US', tr: 'tr_TR' }

const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'tr' : 'en')

/** Absolute URL of a page: pageUrl('tr', '/projects') is https://…/tr/projects. */
export function pageUrl(locale: Locale, path: string): string {
  const localized = localePath(locale, path)
  return localized === '/' ? siteConfig.url : `${siteConfig.url}${localized}`
}

/** Absolute URL of a file or page that may already be absolute. */
export function absoluteUrl(url: string): string {
  return new URL(url, `${siteConfig.url}/`).toString()
}

/** Each language is canonical for itself and names the other as its alternate. */
export function alternates(locale: Locale, path: string): Metadata['alternates'] {
  return {
    canonical: pageUrl(locale, path),
    languages: {
      en: pageUrl('en', path),
      tr: pageUrl('tr', path),
      'x-default': pageUrl('en', path),
    },
  }
}

interface PageMetadataInput {
  locale: Locale
  /** Path of the English page, e.g. '/projects/banker'. */
  path: string
  title: string
  description: string
  /** Use the title as is, without the " | Burak Altıntaş" suffix. */
  absoluteTitle?: boolean
  image?: { url: string; width?: number; height?: number; alt: string }
  type?: 'website' | 'article' | 'profile'
  index?: boolean
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
  image = { url: '/og.png', width: 1200, height: 630, alt: siteConfig.name },
  type = 'website',
  index = true,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type,
      url: pageUrl(locale, path),
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  }
}

/** Defaults every page in one language inherits from its root layout. */
export function layoutMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title[locale],
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description[locale],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/site.webmanifest',
    other: {
      'google-adsense-account': 'ca-pub-7640689562014954',
    },
  }
}
