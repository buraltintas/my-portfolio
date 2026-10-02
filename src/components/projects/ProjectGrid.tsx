'use client'

import { ProjectCard } from './ProjectCard'
import type { ProjectCardData } from '@/types'

interface ProjectGridProps {
  projects: ProjectCardData[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} headingLevel={2} />
      ))}
    </div>
  )
}
