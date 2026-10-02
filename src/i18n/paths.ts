import type { Locale } from './types'

export const locales: Locale[] = ['en', 'tr']

/**
 * The URL of a page in the given language. English lives at the root and
 * Turkish under /tr: localePath('tr', '/projects') is '/tr/projects',
 * localePath('tr', '/') is '/tr' and localePath('tr', '/#contact') is '/tr#contact'.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === 'en') return path
  if (path === '/') return '/tr'
  if (path.startsWith('/#')) return `/tr${path.slice(1)}`
  return `/tr${path}`
}

/** The language a pathname belongs to. */
export function localeOf(pathname: string): Locale {
  return pathname === '/tr' || pathname.startsWith('/tr/') ? 'tr' : 'en'
}

/** The same page in the other language. */
export function counterpartPath(pathname: string): string {
  if (localeOf(pathname) === 'tr') {
    const rest = pathname.slice(3)
    return rest === '' ? '/' : rest
  }
  return localePath('tr', pathname)
}
