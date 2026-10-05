import { siteConfig } from '@/data/site'
import { educations } from '@/data/education'
import type { Locale } from '@/i18n/types'
import type { Project } from '@/types'
import type { Article } from '@/data/writing'
import { isChromeExtension } from '@/components/projects/kinds'
import { absoluteUrl, pageUrl } from '@/lib/seo'

// One graph of linked nodes. The home page carries the full Person; every
// other page refers to it by @id and repeats only its name and URL.
const SITE = siteConfig.url
export const ids = {
  person: `${SITE}/#person`,
  website: `${SITE}/#website`,
  photo: `${SITE}/#photo`,
  // The @id bankaci.app uses for itself, so both sites describe one organization.
  bankaci: 'https://bankaci.app/#organization',
}

type Node = Record<string, unknown>

const ref = (id: string) => ({ '@id': id })

const crumbLabels = {
  projects: { en: 'Projects', tr: 'Projeler' },
  writing: { en: 'Writing', tr: 'Yazılar' },
}

export function personStub(): Node {
  return { '@type': 'Person', '@id': ids.person, name: siteConfig.name, url: SITE }
}

export function personNode(locale: Locale): Node {
  const schools = Array.from(new Set(educations.map((e) => e.school)))
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    givenName: 'Burak',
    familyName: 'Altıntaş',
    url: SITE,
    image: {
      '@type': 'ImageObject',
      '@id': ids.photo,
      url: absoluteUrl(siteConfig.image),
      width: 480,
      height: 480,
      caption: siteConfig.name,
    },
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.bio[locale],
    worksFor: [
      { '@type': 'Organization', name: 'Protel', url: 'https://www.protel.com.tr/' },
      { '@type': 'Organization', name: 'Simpra', url: 'https://simprasuite.com/' },
      ref(ids.bankaci),
      { '@type': 'Organization', name: 'Coffee Dictionary', url: 'https://coffeedictionary.com/' },
    ],
    alumniOf: schools.map((name) => ({
      '@type': /üniversitesi/i.test(name) ? 'CollegeOrUniversity' : 'EducationalOrganization',
      name,
    })),
    knowsAbout: [
      'Frontend development',
      'Mobile app development',
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Expo',
      'Go',
      'Node.js',
      'PostgreSQL',
      'Google Cloud Run',
      'Tailwind CSS',
      'SEO',
    ],
    sameAs: [...Object.values(siteConfig.socials), ...Object.values(siteConfig.stores)],
  }
}

function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: SITE,
    name: siteConfig.name,
    alternateName: [siteConfig.alternateName, 'burak-altintas.com'],
    inLanguage: ['en', 'tr'],
    publisher: ref(ids.person),
  }
}

function bankaciNode(): Node {
  return {
    '@type': 'Organization',
    '@id': ids.bankaci,
    name: 'Bankacı',
    url: 'https://bankaci.app/',
    founder: ref(ids.person),
  }
}

function breadcrumbs(locale: Locale, url: string, trail: { name: string; path?: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [{ name: siteConfig.name, path: '/' }, ...trail].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: pageUrl(locale, item.path) } : {}),
    })),
  }
}

export function homeGraph(locale: Locale, title: string): Node[] {
  const url = pageUrl(locale, '/')
  return [
    websiteNode(),
    {
      '@type': 'ProfilePage',
      '@id': `${url}#profilepage`,
      url,
      name: title,
      inLanguage: locale,
      isPartOf: ref(ids.website),
      mainEntity: ref(ids.person),
      about: ref(ids.person),
      primaryImageOfPage: ref(ids.photo),
    },
    personNode(locale),
    bankaciNode(),
  ]
}

export function projectsGraph(locale: Locale, title: string, description: string, projects: Project[]): Node[] {
  const url = pageUrl(locale, '/projects')
  return [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: ref(ids.website),
      about: ref(ids.person),
      author: ref(ids.person),
      breadcrumb: ref(`${url}#breadcrumb`),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: projects.length,
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: pageUrl(locale, `/projects/${p.slug}`),
          name: p.title[locale],
        })),
      },
    },
    breadcrumbs(locale, url, [{ name: crumbLabels.projects[locale] }]),
    { '@type': 'WebSite', '@id': ids.website, url: SITE, name: siteConfig.name },
    personStub(),
  ]
}

// The project itself. Typed CreativeWork rather than SoftwareApplication:
// Google only accepts app markup with ratings and reviews, which these pages
// don't have, and would report every project as an invalid "Software app".
// additionalType still says what kind of software it is.
function projectNode(project: Project, locale: Locale): Node {
  const { web, ios, android } = project.platformUrls
  const live = project.status !== 'discontinued'
  const extension = isChromeExtension(web)
  const kind = extension ? 'SoftwareApplication' : ios || android ? 'MobileApplication' : 'WebApplication'
  const listings = [web, ios, android].filter((url): url is string => !!url)
  const bankaci = project.slug === 'banker'

  return {
    '@type': 'CreativeWork',
    '@id': appId(project),
    additionalType: `https://schema.org/${kind}`,
    name: project.title[locale],
    description: project.description[locale],
    inLanguage: locale,
    image: absoluteUrl(project.image),
    ...(live && web && !extension ? { url: web } : {}),
    ...(live && listings.length ? { sameAs: listings } : {}),
    ...(project.released ? { datePublished: project.released } : {}),
    keywords: project.tech.join(', '),
    creativeWorkStatus: live ? 'Published' : 'Discontinued',
    author: ref(ids.person),
    creator: ref(ids.person),
    ...(bankaci ? { publisher: ref(ids.bankaci) } : {}),
  }
}

// One id per project for both languages; Bankacı keeps the id its own site uses.
function appId(project: Project): string {
  return project.slug === 'banker' ? 'https://bankaci.app/#app' : `${pageUrl('en', `/projects/${project.slug}`)}#project`
}

export function projectGraph(project: Project, locale: Locale, title: string, description: string): Node[] {
  const url = pageUrl(locale, `/projects/${project.slug}`)
  return [
    {
      '@type': 'ItemPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: ref(ids.website),
      breadcrumb: ref(`${url}#breadcrumb`),
      mainEntity: ref(appId(project)),
      author: ref(ids.person),
      primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(project.image) },
    },
    projectNode(project, locale),
    ...(project.slug === 'banker' ? [bankaciNode()] : []),
    breadcrumbs(locale, url, [
      { name: crumbLabels.projects[locale], path: '/projects' },
      { name: project.title[locale] },
    ]),
    { '@type': 'WebSite', '@id': ids.website, url: SITE, name: siteConfig.name },
    personStub(),
  ]
}

export function writingGraph(locale: Locale, title: string, description: string, articles: Article[]): Node[] {
  const url = pageUrl(locale, '/writing')
  return [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: ref(ids.website),
      about: ref(ids.person),
      author: ref(ids.person),
      breadcrumb: ref(`${url}#breadcrumb`),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: articles.length,
        itemListElement: articles.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'BlogPosting',
            '@id': a.url,
            headline: a.title,
            url: a.url,
            datePublished: a.date,
            description: a.summary.en,
            inLanguage: 'en',
            keywords: a.topics.join(', '),
            author: ref(ids.person),
            publisher: { '@type': 'Organization', name: 'Simpra Tech', url: 'https://blog.simprasuite.com/' },
          },
        })),
      },
    },
    breadcrumbs(locale, url, [{ name: crumbLabels.writing[locale] }]),
    { '@type': 'WebSite', '@id': ids.website, url: SITE, name: siteConfig.name },
    personStub(),
  ]
}

/** A page with no structured data of its own beyond where it sits. */
export function simplePageGraph(locale: Locale, path: string, title: string, trail: { name: string; path?: string }[]): Node[] {
  const url = pageUrl(locale, path)
  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      inLanguage: locale,
      isPartOf: ref(ids.website),
      breadcrumb: ref(`${url}#breadcrumb`),
      author: ref(ids.person),
    },
    breadcrumbs(locale, url, trail),
    { '@type': 'WebSite', '@id': ids.website, url: SITE, name: siteConfig.name },
    personStub(),
  ]
}

/** Safe to inline in a <script>: no "</script>" can close it early. */
export function serializeGraph(graph: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
}
