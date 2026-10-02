import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ImpactHighlights } from '@/components/home/ImpactHighlights'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ExperienceTimeline } from '@/components/home/ExperienceTimeline'
import { Skills } from '@/components/home/Skills'
import { ContactSection } from '@/components/home/ContactSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { getFeaturedProjects, toCard } from '@/lib/projects'
import { homeGraph } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/data/site'
import type { Locale } from '@/i18n/types'

export function homeMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    path: '/',
    title: siteConfig.title[locale],
    description: siteConfig.description[locale],
    absoluteTitle: true,
    type: 'profile',
  })
}

export function HomeView({ locale }: { locale: Locale }) {
  const featured = getFeaturedProjects().map((p) => toCard(p, locale))

  return (
    <>
      <JsonLd graph={homeGraph(locale, siteConfig.title[locale])} />
      <Hero />
      <ImpactHighlights />
      <SelectedWork projects={featured} />
      <ExperienceTimeline />
      <Skills />
      <ContactSection />
    </>
  )
}
