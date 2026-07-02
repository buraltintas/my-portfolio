import { getAllProjects } from '@/lib/projects'
import { ProjectsPageContent } from '@/components/projects/ProjectsPageContent'
import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of product-focused web and mobile projects built by Burak Altıntaş.',
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: 'Projects | Burak Altıntaş',
    description: 'A collection of product-focused web and mobile projects built by Burak Altıntaş.',
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Projects by Burak Altıntaş' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Burak Altıntaş',
    description: 'A collection of product-focused web and mobile projects built by Burak Altıntaş.',
    images: ['/og.png'],
  },
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return <ProjectsPageContent projects={projects} />
}
