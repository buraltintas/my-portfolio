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
