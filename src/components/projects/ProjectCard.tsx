'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
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
        <div className="mt-auto flex gap-3 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              {t('projects.liveDemo')} &rarr;
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300"
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
