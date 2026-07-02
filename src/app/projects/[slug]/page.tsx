import { getAllProjects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { siteConfig } from '@/data/site'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`
  const pageTitle =
    project.slug === 'dinecue'
      ? 'DineCue | AI Dining Decision Assistant'
      : project.title.en
  const keywords = [
    ...project.tech,
    project.title.en,
    project.description.en,
    'Burak Altıntaş portfolio project',
  ]

  return {
    title: pageTitle,
    description: project.description.en,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.title.en,
      description: project.description.en,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'article',
      images: [{ url: project.image, alt: project.title.en }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: project.description.en,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return <ProjectDetail project={project} />
}
