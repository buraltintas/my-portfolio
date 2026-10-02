'use client'

import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

export function Skills() {
  const { t, locale } = useLocale()

  return (
    <section className="shell flex flex-col gap-8 pt-[clamp(72px,10vw,120px)]" aria-labelledby="skills">
      <SectionHeading title={t('skills.title')} id="skills" />
      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title.en} className="flex flex-col gap-2.5 border-t border-slate-800 pt-3.5">
            <h3 className="text-base font-semibold text-slate-50">{category.title[locale]}</h3>
            <p className="font-mono text-[13.5px] leading-[1.75] text-slate-300">{category.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
