'use client'

import { useLocale } from '@/i18n/useLocale'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { siteConfig } from '@/data/site'

export function ContactSection() {
  const { t } = useLocale()

  return (
    <AnimatedSection id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <div className="flex flex-col items-center gap-6">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-base font-medium text-blue-400 hover:text-blue-300 transition-colors sm:text-xl break-all sm:break-normal"
        >
          {siteConfig.email}
        </a>
        <SocialLinks />
      </div>
    </AnimatedSection>
  )
}
