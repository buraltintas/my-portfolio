import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { poseBuddyPages } from '@/data/poseBuddyPages'
import { locales } from '@/i18n/paths'
import { pageUrl } from '@/lib/seo'

export const dynamic = 'force-static'

// Every indexable page in both languages, each listing its counterpart.
// No lastmod: a build date on every URL would tell Google nothing.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/projects',
    ...getAllProjects().map((p) => `/projects/${p.slug}`),
    ...Object.values(poseBuddyPages)
      .filter((page) => page.index)
      .map((page) => page.path),
  ]

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: pageUrl(locale, path),
      alternates: {
        languages: {
          en: pageUrl('en', path),
          tr: pageUrl('tr', path),
          'x-default': pageUrl('en', path),
        },
      },
    }))
  )
}
