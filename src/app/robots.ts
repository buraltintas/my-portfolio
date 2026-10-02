import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export const dynamic = 'force-static'

// Everything is open, AI search and answer crawlers included. The only
// exception is the .txt route payloads the Next.js router fetches, which are
// not pages; the .txt files meant to be read stay allowed (longest rule wins).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/llms.txt', '/ads.txt', '/app-ads.txt'],
      disallow: ['/*.txt'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
