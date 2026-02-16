'use client'

import { useLocale } from '@/i18n/useLocale'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/types'

interface SelectedWorkProps {
  projects: Project[]
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const { t } = useLocale()

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t('selectedWork.title')}
        subtitle={t('selectedWork.subtitle')}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/projects" variant="secondary" size="lg">
          {t('selectedWork.viewAll')} &rarr;
        </Button>
      </div>
    </AnimatedSection>
  )
}
