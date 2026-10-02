import type { Metadata } from 'next'
import { ProjectsPageContent } from '@/components/projects/ProjectsPageContent'
import { JsonLd } from '@/components/seo/JsonLd'
import { getAllProjects, toCard } from '@/lib/projects'
import { projectsGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import type { Locale } from '@/i18n/types'

const copy = {
  title: {
    en: 'Projects by Burak Altıntaş — Web & Mobile Apps',
    tr: 'Burak Altıntaş Projeleri — Web ve Mobil Uygulamalar',
  },
  description: {
    en: 'Web and mobile projects by Burak Altıntaş: Bankacı, Boşa Gezme!, Coffee Dictionary, MarketMatik, BootChat and more, built with React, React Native, Next.js and Go.',
    tr: "Burak Altıntaş'ın web ve mobil projeleri: Bankacı, Boşa Gezme!, Coffee Dictionary, MarketMatik, BootChat ve dahası; React, React Native, Next.js ve Go ile geliştirildi.",
  },
}

export function projectsMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    path: '/projects',
    title: copy.title[locale],
    description: copy.description[locale],
    absoluteTitle: true,
  })
}

export function ProjectsView({ locale }: { locale: Locale }) {
  const projects = getAllProjects()

  return (
    <>
      <JsonLd graph={projectsGraph(locale, copy.title[locale], copy.description[locale], projects)} />
      <ProjectsPageContent projects={projects.map((p) => toCard(p, locale))} />
    </>
  )
}
