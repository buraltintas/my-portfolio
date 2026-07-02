'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { Badge } from '@/components/ui/Badge'
import { ProjectPlatformLinks } from '@/components/projects/ProjectPlatformLinks'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, t } = useLocale()
  const content = locale === 'tr' && project.contentTr ? project.contentTr : project.content

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
        <ProjectPlatformLinks
          platformUrls={project.platformUrls}
          className="gap-3"
          iconClassName="h-12 w-12"
        />
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('projects.github')}
            title={t('projects.github')}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
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

      {content && (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.3)] sm:p-8">
          <article className="project-content" lang={locale}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        </section>
      )}
    </div>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.8 8.1 6.7 9.4.5.1.7-.2.7-.5v-2c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.5.2 2.6.1 2.8.7.8 1 1.7 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
    </svg>
  )
}
