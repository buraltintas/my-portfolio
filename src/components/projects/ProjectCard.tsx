'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProjectPlatformLinks } from '@/components/projects/ProjectPlatformLinks'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useLocale()

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title[locale]}
          </h3>
        </Link>
        <p className="mb-4 text-sm text-slate-400 line-clamp-2">
          {project.description[locale]}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3">
          <ProjectPlatformLinks
            platformUrls={project.platformUrls}
            iconClassName="h-10 w-10"
          />
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('projects.github')}
              title={t('projects.github')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.8 8.1 6.7 9.4.5.1.7-.2.7-.5v-2c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.5.2 2.6.1 2.8.7.8 1 1.7 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
    </svg>
  )
}
