import type { Project } from '@/types'

/** DomainDock's "web" link is its Chrome Web Store listing. */
export const isChromeExtension = (url?: string) =>
  !!url && /chromewebstore\.google\.com|chrome\.google\.com\/webstore/.test(url)

/** Clever Countdown's "web" link is its YouTube channel. */
export const isYouTube = (url?: string) => !!url && /(^|\.)youtube\.com\/|youtu\.be\//.test(url)

/** Platforms the project runs on, as a short label: "iOS, Android, web". */
export function projectKinds(project: Pick<Project, 'platformUrls' | 'platforms'>): string {
  if (project.platforms) return project.platforms
  const { web, ios, android } = project.platformUrls
  const kinds = [
    ios ? 'iOS' : null,
    android ? 'Android' : null,
    web ? (isChromeExtension(web) ? 'Chrome extension' : isYouTube(web) ? 'YouTube' : 'web') : null,
  ].filter(Boolean)
  return kinds.join(', ')
}
