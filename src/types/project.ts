export interface LocaleString {
  en: string
  tr: string
}

export interface ProjectPlatformUrls {
  web?: string
  ios?: string
  android?: string
}

export interface ProjectImage {
  src: string
  width: number
  height: number
  caption: LocaleString
}

export type ProjectStatus = 'live' | 'discontinued'

export interface Project {
  title: LocaleString
  description: LocaleString
  /** Page title before the " | Burak Altıntaş" suffix; falls back to the title. */
  seoTitle?: LocaleString
  /** Meta description; falls back to the description. */
  seoDescription?: LocaleString
  slug: string
  image: string
  platformUrls: ProjectPlatformUrls
  githubUrl: string
  tech: string[]
  featured: boolean
  order: number
  status: ProjectStatus
  gallery: ProjectImage[]
  content?: string
  contentTr?: string
}

/** What a project card needs, in one language: no case study text. */
export interface ProjectCardData {
  slug: string
  title: string
  description: string
  image: string
  platformUrls: ProjectPlatformUrls
  githubUrl: string
  tech: string[]
  status: ProjectStatus
}
