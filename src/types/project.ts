export interface LocaleString {
  en: string
  tr: string
}

export interface Project {
  title: LocaleString
  description: LocaleString
  slug: string
  image: string
  liveUrl: string
  githubUrl: string
  tech: string[]
  featured: boolean
  order: number
  content?: string
}
