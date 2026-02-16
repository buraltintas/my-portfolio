import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Project } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        title: data.title,
        description: data.description,
        slug: data.slug,
        image: data.image,
        liveUrl: data.liveUrl || '',
        githubUrl: data.githubUrl || '',
        tech: data.tech || [],
        featured: data.featured || false,
        order: data.order || 99,
        content: content.trim() || undefined,
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
