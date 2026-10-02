import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Locale } from '@/i18n/types'
import type { Project, ProjectCardData } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

function splitProjectContent(content: string) {
  const lines = content.split('\n')
  const contentTrIndex = lines.findIndex((line) => line.trim() === 'contentTr: |')

  if (contentTrIndex === -1) {
    return { englishContent: content.trim() || undefined, turkishContent: undefined }
  }

  const turkishLines: string[] = []
  let endIndex = contentTrIndex + 1

  while (endIndex < lines.length) {
    const line = lines[endIndex]
    if (line.startsWith('  ') || line.trim() === '') {
      turkishLines.push(line.startsWith('  ') ? line.slice(2) : '')
      endIndex += 1
      continue
    }
    break
  }

  const englishLines = [...lines.slice(0, contentTrIndex), ...lines.slice(endIndex)]

  return {
    englishContent: englishLines.join('\n').trim() || undefined,
    turkishContent: turkishLines.join('\n').trim() || undefined,
  }
}

function getPlatformUrls(data: Record<string, unknown>) {
  const platformUrls = data.platformUrls
  if (platformUrls && typeof platformUrls === 'object' && !Array.isArray(platformUrls)) {
    return platformUrls as Project['platformUrls']
  }

  const liveUrl = typeof data.liveUrl === 'string' ? data.liveUrl : ''
  if (!liveUrl) {
    return {}
  }

  if (liveUrl.includes('apps.apple.com')) {
    return { ios: liveUrl }
  }

  if (liveUrl.includes('play.google.com')) {
    return { android: liveUrl }
  }

  return { web: liveUrl }
}

// Case studies are injected as HTML, so Markdown would show up as literal
// "## Overview" text. Fail the build instead.
function assertHtml(fileName: string, language: string, body: string | undefined) {
  if (body && /^\s*(#{1,6}\s|[-*]\s+\S)/m.test(body)) {
    throw new Error(`${fileName}: the ${language} case study is Markdown; write it as HTML.`)
  }
}

let cache: Project[] | undefined

export function getAllProjects(): Project[] {
  // Parsed once per build; in development every request re-reads the files.
  if (cache && process.env.NODE_ENV === 'production') return cache
  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx') && !name.startsWith('._'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content: body } = matter(fileContents)
      const splitContent = splitProjectContent(body)

      const content = splitContent.englishContent
      const contentTr =
        typeof data.contentTr === 'string' ? data.contentTr.trim() || undefined : splitContent.turkishContent
      assertHtml(fileName, 'English', content)
      assertHtml(fileName, 'Turkish', contentTr)

      return {
        title: data.title,
        description: data.description,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        slug: data.slug,
        image: data.image,
        platformUrls: getPlatformUrls(data),
        githubUrl: data.githubUrl || '',
        tech: data.tech || [],
        featured: data.featured || false,
        order: data.order || 99,
        status: data.status === 'discontinued' ? 'discontinued' : 'live',
        gallery: Array.isArray(data.gallery) ? data.gallery : [],
        content,
        contentTr,
      } as Project
    })
    .sort((a, b) => a.order - b.order)

  cache = projects
  return projects
}

export function getProject(slug: string): Project | undefined {
  const projects = getAllProjects()
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured)
}

export function toCard(project: Project, locale: Locale): ProjectCardData {
  return {
    slug: project.slug,
    title: project.title[locale],
    description: project.description[locale],
    image: project.image,
    platformUrls: project.platformUrls,
    githubUrl: project.githubUrl,
    tech: project.tech,
    status: project.status,
  }
}

/** The 1200×630 share image made for a cover, or the site image. */
export function projectOgImage(project: Project): string {
  const match = /^\/images\/projects\/([^/]+)\.\w+$/.exec(project.image)
  const og = match && `/images/projects/og/${match[1]}.jpg`
  return og && fs.existsSync(path.join(process.cwd(), 'public', og)) ? og : '/og.png'
}
