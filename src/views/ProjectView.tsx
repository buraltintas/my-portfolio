import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { JsonLd } from '@/components/seo/JsonLd'
import { getAllProjects, getProject, projectOgImage } from '@/lib/projects'
import { projectGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import type { Locale } from '@/i18n/types'
import type { Project } from '@/types'

export function projectParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

const titleOf = (project: Project, locale: Locale) => project.seoTitle?.[locale] || project.title[locale]
const descriptionOf = (project: Project, locale: Locale) =>
  project.seoDescription?.[locale] || project.description[locale]

export function projectMetadata(slug: string, locale: Locale): Metadata {
  const project = getProject(slug)
  if (!project) return {}

  return pageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: titleOf(project, locale),
    description: descriptionOf(project, locale),
    type: 'article',
    image: { url: projectOgImage(project), width: 1200, height: 630, alt: project.title[locale] },
  })
}

export function ProjectView({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProject(slug)
  if (!project) notFound()

  const all = getAllProjects()
  const at = all.findIndex((p) => p.slug === project.slug)
  const following = all[(at + 1) % all.length]
  const next = following && following.slug !== project.slug ? { slug: following.slug, title: following.title } : undefined

  // Only this language's case study goes to the client.
  const localized: Project = {
    ...project,
    content: locale === 'tr' && project.contentTr ? project.contentTr : project.content,
    contentTr: undefined,
  }

  return (
    <>
      <JsonLd graph={projectGraph(project, locale, titleOf(project, locale), descriptionOf(project, locale))} />
      <ProjectDetail project={localized} next={next} />
    </>
  )
}
