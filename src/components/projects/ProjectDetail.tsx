'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, t } = useLocale()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
      >
        &larr; {t('projects.backAll')}
      </Link>

      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{project.title[locale]}</h1>
      <p className="mb-8 text-base text-slate-400 sm:text-lg">{project.description[locale]}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-3 sm:gap-4">
        {project.liveUrl && (
          <Button href={project.liveUrl} variant="primary">
            {t('projects.liveDemo')} &rarr;
          </Button>
        )}
        {project.githubUrl && (
          <Button href={project.githubUrl} variant="secondary">
            GitHub
          </Button>
        )}
      </div>

      <div className="relative mb-12 aspect-video overflow-hidden rounded-xl border border-slate-800">
        <Image
          src={project.image}
          alt={project.title[locale]}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>

      {project.content && (
        <article className="prose prose-invert prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      )}
    </div>
  )
}
