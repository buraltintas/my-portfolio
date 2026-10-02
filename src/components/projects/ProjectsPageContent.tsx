'use client'

import { useLocale } from '@/i18n/useLocale'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import type { ProjectCardData } from '@/types'

interface ProjectsPageContentProps {
  projects: ProjectCardData[]
}

export function ProjectsPageContent({ projects }: ProjectsPageContentProps) {
  const { t } = useLocale()

  return (
    <div className="shell flex flex-col gap-10 pb-[clamp(56px,8vw,88px)] pt-[clamp(40px,6vw,72px)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[clamp(34px,5vw,48px)] font-bold leading-[1.08] tracking-[-0.02em] text-slate-50">
          {t('projects.title')}
        </h1>
        <p className="max-w-[680px] text-lg text-slate-400">{t('projects.intro')}</p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  )
}
