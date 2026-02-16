import { Hero } from '@/components/home/Hero'
import { ImpactHighlights } from '@/components/home/ImpactHighlights'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ExperienceTimeline } from '@/components/home/ExperienceTimeline'
import { Skills } from '@/components/home/Skills'
import { ContactSection } from '@/components/home/ContactSection'
import { getFeaturedProjects } from '@/lib/projects'
import { siteConfig } from '@/data/site'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: 'Frontend Developer',
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.medium,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ImpactHighlights />
      <SelectedWork projects={featuredProjects} />
      <ExperienceTimeline />
      <Skills />
      <ContactSection />
    </>
  )
}
