'use client'

import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectSpotlight } from '@/components/projects/ProjectSpotlight'
import type { ProjectCardData } from '@/types'

interface SelectedWorkProps {
  projects: ProjectCardData[]
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const { t, path } = useLocale()
  const [spotlight, ...rest] = projects

  return (
    <section id="work" className="shell flex flex-col gap-8 pt-[clamp(72px,10vw,120px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <SectionHeading title={t('selectedWork.title')} subtitle={t('selectedWork.subtitle')} />
        <Link href={path('/projects')} className="inline-flex min-h-11 items-center text-[15px] font-medium text-blue-400 hover:text-blue-300">
          {t('selectedWork.viewAll')}
          <span aria-hidden="true">&nbsp;→</span>
        </Link>
      </div>
      {spotlight && <ProjectSpotlight project={spotlight} />}
      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
