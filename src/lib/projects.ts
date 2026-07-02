import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Project } from '@/types'

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

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx') && !name.startsWith('._'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const splitContent = splitProjectContent(content)

      return {
        title: data.title,
        description: data.description,
        slug: data.slug,
        image: data.image,
        platformUrls: getPlatformUrls(data),
        githubUrl: data.githubUrl || '',
        tech: data.tech || [],
        featured: data.featured || false,
        order: data.order || 99,
        content: splitContent.englishContent,
        contentTr:
          typeof data.contentTr === 'string'
            ? data.contentTr.trim() || undefined
            : splitContent.turkishContent,
      } as Project
    })
    .sort((a, b) => a.order - b.order)

  return projects
}

export function getProject(slug: string): Project | undefined {
  const projects = getAllProjects()
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured)
}
