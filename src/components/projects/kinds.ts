import type { Project } from '@/types'

/** DomainDock's "web" link is its Chrome Web Store listing. */
export const isChromeExtension = (url?: string) =>
  !!url && /chromewebstore\.google\.com|chrome\.google\.com\/webstore/.test(url)

/** Platforms the project runs on, as a short label: "iOS, Android, web". */
export function projectKinds(project: Pick<Project, 'platformUrls'>): string {
  const { web, ios, android } = project.platformUrls
  const kinds = [
    ios ? 'iOS' : null,
    android ? 'Android' : null,
    web ? (isChromeExtension(web) ? 'Chrome extension' : 'web') : null,
  ].filter(Boolean)
  return kinds.join(', ')
}
