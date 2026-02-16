import { getAllProjects } from '@/lib/projects'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of web and mobile projects built by Burak Altıntaş.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">All Projects</h1>
        <p className="mt-3 text-lg text-slate-400">A collection of projects I&apos;ve built</p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  )
}
