import { siteConfig } from '@/data/site'
import { experiences } from '@/data/experience'
import { educations } from '@/data/education'
import { skillCategories } from '@/data/skills'
import { getAllProjects } from '@/lib/projects'
import { projectKinds } from '@/components/projects/kinds'
import { pageUrl } from '@/lib/seo'

// /llms.txt (llmstxt.org): who Burak Altıntaş is and what he has built, as
// plain Markdown for AI assistants. Built from the same data as the pages.
export function llmsTxt(): string {
  const projects = getAllProjects()
  const lines: string[] = []

  lines.push(`# ${siteConfig.name}`, '')
  lines.push(`> ${siteConfig.bio.en}`, '')
  lines.push(
    `Also written as "${siteConfig.alternateName}". ${siteConfig.jobTitle} at Protel & Simpra and founder of Bankacı (https://bankaci.app). ` +
      `This site is in English at ${pageUrl('en', '/')} and in Turkish at ${pageUrl('tr', '/')}.`,
    ''
  )

  lines.push('## Experience', '')
  for (const exp of experiences) {
    lines.push(`- ${exp.role.en}, ${exp.company} (${exp.period.en}): ${exp.description.en}`)
  }
  lines.push('')

  lines.push('## Education', '')
  for (const edu of educations) {
    lines.push(`- ${edu.degree.en}, ${edu.school} (${edu.period.en})`)
  }
  lines.push('')

  lines.push('## Skills', '')
  for (const category of skillCategories) {
    lines.push(`- ${category.title.en}: ${category.skills.join(', ')}`)
  }
  lines.push('')

  lines.push('## Projects', '')
  for (const p of projects) {
    const facts = [
      projectKinds(p) && `Platforms: ${projectKinds(p)}.`,
      p.tech.length && `Stack: ${p.tech.join(', ')}.`,
      p.status === 'discontinued' ? 'Status: discontinued.' : null,
    ].filter(Boolean)
    lines.push(`- [${p.title.en}](${pageUrl('en', `/projects/${p.slug}`)}): ${p.description.en} ${facts.join(' ')}`.trim())
  }
  lines.push('')

  lines.push('## Links', '')
  lines.push(`- [Projects](${pageUrl('en', '/projects')}): all ${projects.length} projects with case studies`)
  lines.push(`- [Türkçe](${pageUrl('tr', '/')}): the same site in Turkish`)
  lines.push(`- [GitHub](${siteConfig.socials.github})`)
  lines.push(`- [LinkedIn](${siteConfig.socials.linkedin})`)
  lines.push(`- [X](${siteConfig.socials.twitter})`)
  lines.push(`- [Medium](${siteConfig.socials.medium})`)
  lines.push(`- [App Store developer page](${siteConfig.stores.appStore})`)
  lines.push(`- [Google Play developer page](${siteConfig.stores.googlePlay})`)
  lines.push(`- Email: ${siteConfig.email}`)
  lines.push('')

  return lines.join('\n')
}
