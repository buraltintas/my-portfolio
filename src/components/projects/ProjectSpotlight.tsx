'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { ProjectLinks } from '@/components/projects/ProjectLinks'
import type { Project } from '@/types'

interface ProjectSpotlightProps {
  project: Project
}

// The first selected work, given the full width: image on one side, the
// project and its links on the other.
export function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  const { locale, t } = useLocale()

  return (
    <article className="grid overflow-hidden rounded-[14px] border border-blue-900 bg-panel lg:grid-cols-2 lg:items-center">
      <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-video">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </Link>
      <div className="flex flex-col gap-3.5 p-[clamp(22px,3vw,36px)]">
        <h3 className="text-[32px] font-bold leading-[1.1] tracking-[-0.015em] text-slate-50">
          <Link href={`/projects/${project.slug}`} className="hover:text-blue-300">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="text-[17px] text-slate-300">{project.description[locale]}</p>
        <p className="flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-[13px] text-slate-400">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
        <div className="flex flex-wrap gap-2 pt-1.5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-4 text-[15px] font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t('projects.viewCase')}
          </Link>
          <ProjectLinks project={project} variant="button" className="contents" />
        </div>
      </div>
    </article>
  )
}
