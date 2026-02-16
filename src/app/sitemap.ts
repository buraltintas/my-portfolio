import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { siteConfig } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  const projectUrls = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/projects`, lastModified: new Date() },
    ...projectUrls,
  ]
}
