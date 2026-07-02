'use client'

import { useLocale } from '@/i18n/useLocale'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import type { Project } from '@/types'

interface ProjectsPageContentProps {
  projects: Project[]
}

export function ProjectsPageContent({ projects }: ProjectsPageContentProps) {
  const { t } = useLocale()

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{t('projects.title')}</h1>
        <p className="mt-3 text-lg text-slate-400">{t('projects.subtitle')}</p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  )
}
