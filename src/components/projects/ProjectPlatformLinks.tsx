'use client'

import { useLocale } from '@/i18n/useLocale'
import { cn } from '@/lib/utils'
import type { ProjectPlatformUrls } from '@/types'

interface ProjectPlatformLinksProps {
  platformUrls: ProjectPlatformUrls
  className?: string
  iconClassName?: string
}

const iconWrapperClassName =
  'inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition-colors hover:border-blue-500 hover:text-white'

export function ProjectPlatformLinks({
  platformUrls,
  className,
  iconClassName,
}: ProjectPlatformLinksProps) {
  const { t } = useLocale()

  const links = [
    platformUrls.web
      ? { key: 'web', href: platformUrls.web, label: t('projects.platform.web'), icon: GlobeIcon }
      : null,
    platformUrls.ios
      ? { key: 'ios', href: platformUrls.ios, label: t('projects.platform.ios'), icon: AppleIcon }
      : null,
    platformUrls.android
      ? {
          key: 'android',
          href: platformUrls.android,
          label: t('projects.platform.android'),
          icon: AndroidIcon,
        }
      : null,
  ].filter(Boolean) as Array<{
    key: 'web' | 'ios' | 'android'
    href: string
    label: string
    icon: (props: { className?: string }) => JSX.Element
  }>

  if (links.length === 0) {
    return null
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map(({ key, href, label, icon: Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={cn(iconWrapperClassName, iconClassName)}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18" />
      <path d="M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.78 12.03c.01-2.13 1.74-3.16 1.82-3.21-.99-1.45-2.53-1.65-3.07-1.67-1.29-.14-2.55.77-3.2.77-.67 0-1.68-.75-2.77-.73-1.42.02-2.75.84-3.48 2.12-1.51 2.61-.38 6.45 1.06 8.53.72 1.02 1.56 2.16 2.67 2.12 1.08-.05 1.49-.69 2.8-.69 1.3 0 1.69.69 2.8.66 1.17-.02 1.9-1.03 2.59-2.06.82-1.17 1.14-2.32 1.15-2.38-.03-.01-2.19-.84-2.17-3.46Z" />
      <path d="M14.69 5.78c.58-.7.98-1.66.87-2.63-.84.04-1.89.58-2.49 1.27-.54.62-1.02 1.61-.89 2.54.95.07 1.93-.48 2.51-1.18Z" />
    </svg>
  )
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.64 7.03 6.4 4.77a.45.45 0 1 1 .79-.43l1.25 2.28a8.5 8.5 0 0 1 7.12 0l1.25-2.28a.45.45 0 0 1 .79.43l-1.23 2.26A6.7 6.7 0 0 1 19.1 12H4.9c0-2.17 1.07-4.08 2.74-4.97ZM9.8 9.57a.63.63 0 1 0 0-1.26.63.63 0 0 0 0 1.26Zm4.4 0a.63.63 0 1 0 0-1.26.63.63 0 0 0 0 1.26ZM4.88 12.77v4.6c0 .72.58 1.3 1.3 1.3h.92v2.03a.9.9 0 1 0 1.8 0v-2.03h6.2v2.03a.9.9 0 1 0 1.8 0v-2.03h.92c.72 0 1.3-.58 1.3-1.3v-4.6H4.88ZM3.1 12.86a.9.9 0 0 0-.9.9v3.53a.9.9 0 1 0 1.8 0v-3.53a.9.9 0 0 0-.9-.9Zm17.8 0a.9.9 0 0 0-.9.9v3.53a.9.9 0 1 0 1.8 0v-3.53a.9.9 0 0 0-.9-.9Z" />
    </svg>
  )
}
