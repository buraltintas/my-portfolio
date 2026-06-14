export interface LocaleString {
  en: string
  tr: string
}

export interface ProjectPlatformUrls {
  web?: string
  ios?: string
  android?: string
}

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
  content?: string
}
