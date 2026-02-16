'use client'

import { useLocale } from '@/i18n/useLocale'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'

export function Skills() {
  const { t, locale } = useLocale()

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title={t('skills.title')} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title.en} className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              {category.title[locale]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
