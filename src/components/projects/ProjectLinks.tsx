'use client'

import { useLocale } from '@/i18n/useLocale'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'
import { isChromeExtension } from './kinds'

type Linkable = Pick<Project, 'status' | 'platformUrls' | 'githubUrl'>

interface ProjectLink {
  key: string
  href: string
  label: string
  aria: string
}

// Short, same-for-every-card link text (Web, App Store, Google Play,
// GitHub); the longer "Open the iOS version" follows for screen readers.
export function useProjectLinks(project: Linkable): ProjectLink[] {
  const { t } = useLocale()
  if (project.status === 'discontinued') return []
  const { web, ios, android } = project.platformUrls
  const links: ProjectLink[] = []
  if (web && isChromeExtension(web)) {
    links.push({ key: 'web', href: web, label: 'Chrome Web Store', aria: t('projects.platform.chrome') })
  } else if (web) {
    links.push({ key: 'web', href: web, label: 'Web', aria: t('projects.platform.web') })
  }
  if (ios) links.push({ key: 'ios', href: ios, label: 'App Store', aria: t('projects.platform.ios') })
  if (android) links.push({ key: 'android', href: android, label: 'Google Play', aria: t('projects.platform.android') })
  if (project.githubUrl) links.push({ key: 'github', href: project.githubUrl, label: 'GitHub', aria: t('projects.github') })
  return links
}

export { projectKinds } from './kinds'

interface ProjectLinksProps {
  project: Linkable
  variant?: 'text' | 'button'
  /** The first link as the filled button (detail page, spotlight card). */
  primaryFirst?: boolean
  className?: string
}

export function ProjectLinks({ project, variant = 'text', primaryFirst = false, className }: ProjectLinksProps) {
  const links = useProjectLinks(project)
  if (links.length === 0) return null

  if (variant === 'text') {
    return (
      <div className={cn('-ml-2 flex flex-wrap gap-x-1', className)}>
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center px-2 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            {link.label}
            <span aria-hidden="true">&nbsp;↗</span>
            <span className="sr-only"> ({link.aria})</span>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.map((link, i) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex min-h-11 items-center rounded-lg px-4 text-[15px] transition-colors',
            primaryFirst && i === 0
              ? 'bg-blue-600 font-semibold text-white hover:bg-blue-700'
              : 'border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white'
          )}
        >
          {link.label}
          <span aria-hidden="true">&nbsp;↗</span>
          <span className="sr-only"> ({link.aria})</span>
        </a>
      ))}
    </div>
  )
}
