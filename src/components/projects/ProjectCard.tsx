'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { DiscontinuedBadge } from '@/components/projects/DiscontinuedBadge'
import { ProjectLinks, projectKinds } from '@/components/projects/ProjectLinks'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  /** h2 on the projects page, where the cards sit right under the h1. */
  headingLevel?: 2 | 3
}

export function ProjectCard({ project, headingLevel = 3 }: ProjectCardProps) {
  const { locale, t } = useLocale()
  const kinds = projectKinds(project)
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <article className="group flex h-full flex-col gap-3">
      {/* The title link below is the one tab stop; a cover that is not 16:9
          is shown whole over a blurred copy of itself. */}
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-video overflow-hidden rounded-[10px] border border-slate-800 bg-slate-900"
      >
        <Image
          src={project.image}
          alt=""
          fill
          className="scale-110 object-cover opacity-40 blur-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 360px"
        />
        <Image
          src={project.image}
          alt=""
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 360px"
        />
        {project.status === 'discontinued' && (
          <DiscontinuedBadge className="absolute left-3 top-3" label={t('projects.discontinued')} />
        )}
      </Link>
      <div className="flex items-baseline justify-between gap-3">
        <Heading className="text-[19px] font-semibold leading-snug text-slate-50">
          <Link href={`/projects/${project.slug}`} className="hover:text-blue-300">
            {project.title[locale]}
          </Link>
        </Heading>
        {kinds && <span className="whitespace-nowrap font-mono text-xs text-slate-400">{kinds}</span>}
      </div>
      <p className="text-[15px] leading-[1.55] text-slate-400">{project.description[locale]}</p>
      <p className="font-mono text-[12.5px] leading-relaxed text-slate-400">{project.tech.slice(0, 4).join(', ')}</p>
      {/* Pushed to the bottom so the links line up across a row of cards. */}
      <ProjectLinks project={project} className="mt-auto" />
    </article>
  )
}
