import { getAllProjects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProjectDetail } from '@/components/projects/ProjectDetail'

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

  return {
    title: project.title.en,
    description: project.description.en,
    openGraph: {
      title: project.title.en,
      description: project.description.en,
      images: [{ url: project.image }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return <ProjectDetail project={project} />
}
