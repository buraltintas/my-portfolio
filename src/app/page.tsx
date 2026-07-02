import { Hero } from '@/components/home/Hero'
import { ImpactHighlights } from '@/components/home/ImpactHighlights'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ExperienceTimeline } from '@/components/home/ExperienceTimeline'
import { Skills } from '@/components/home/Skills'
import { ContactSection } from '@/components/home/ContactSection'
import { getFeaturedProjects } from '@/lib/projects'
import { siteConfig } from '@/data/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og.png'],
  },
}

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
