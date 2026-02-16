'use client'

import { useLocale } from '@/i18n/useLocale'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'

export function ExperienceTimeline() {
  const { t, locale } = useLocale()

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title={t('experience.title')} />
      <div className="mx-auto max-w-2xl space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.company} className="p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.role[locale]}</h3>
                <p className="text-blue-400">{exp.company}</p>
              </div>
              <p className="text-sm text-slate-500">{exp.period[locale]}</p>
            </div>
            <p className="mt-3 text-slate-400">{exp.description[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
