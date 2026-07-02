import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { siteConfig } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()
  const now = new Date()
  const staticUrls = [
    siteConfig.url,
    `${siteConfig.url}/projects`,
    `${siteConfig.url}/projects/pose-buddy/privacy`,
    `${siteConfig.url}/projects/pose-buddy/support`,
    `${siteConfig.url}/projects/pose-buddy/terms`,
  ]

  const projectUrls = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: now,
  }))

  return [...staticUrls.map((url) => ({ url, lastModified: now })), ...projectUrls]
}
