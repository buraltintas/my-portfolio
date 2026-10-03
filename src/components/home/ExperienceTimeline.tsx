'use client'

import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { educations } from '@/data/education'

const isCurrent = (period: string) => /present|günümüz/i.test(period)

// Experience and education share one timeline layout: the period in a mono
// column, then a rule with a dot (filled for what is still going on).
export function ExperienceTimeline() {
  const { t, locale } = useLocale()

  return (
    <section className="shell grid gap-x-12 gap-y-8 pt-[clamp(72px,10vw,120px)] lg:grid-cols-[240px_minmax(0,1fr)]">
      <SectionHeading title={t('experience.title')} id="experience" />
      <ol className="min-w-0" aria-labelledby="experience">
        {experiences.map((exp, i) => {
          const current = isCurrent(exp.period.en)
          const last = i === experiences.length - 1
          return (
            <li key={exp.company} className="flex flex-wrap gap-x-7">
              <div className="w-full pb-2.5 font-mono text-[13px] text-slate-300 sm:w-[150px] sm:shrink-0">
                {exp.period[locale]}
              </div>
              <div
                className={`relative flex min-w-0 flex-1 basis-[300px] flex-col gap-2 border-l-2 pl-7 ${
                  last ? 'border-dashed border-slate-700 pb-2' : 'border-slate-800 pb-11'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-2 top-[5px] h-3.5 w-3.5 rounded-full ${
                    current ? 'live-dot border-[3px] border-ink bg-blue-500' : 'border-2 border-slate-500 bg-ink'
                  }`}
                />
                <h3 className="text-[19px] font-semibold leading-[1.3] text-slate-50">
                  {exp.role[locale]} <span className="font-normal text-blue-400">{exp.company}</span>
                </h3>
                <p className="text-base text-slate-300">{exp.description[locale]}</p>
                <p className="font-mono text-[12.5px] leading-relaxed text-slate-400">{exp.tech.join(', ')}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="pt-6">
        <h2 id="education" className="text-[clamp(24px,2.8vw,28px)] font-bold leading-tight text-slate-50">
          {t('education.title')}
        </h2>
      </div>
      <ol className="min-w-0 lg:pt-6" aria-labelledby="education">
        {educations.map((edu, i) => {
          const current = /progress|devam/i.test(edu.period.en)
          const last = i === educations.length - 1
          return (
            <li key={`${edu.school}-${edu.period.en}`} className="flex flex-wrap gap-x-7">
              <div className="w-full pb-2.5 font-mono text-[13px] text-slate-300 sm:w-[150px] sm:shrink-0">
                {edu.period[locale]}
              </div>
              <div
                className={`relative flex min-w-0 flex-1 basis-[300px] flex-col gap-1.5 border-l-2 border-slate-800 pl-7 ${
                  last ? 'pb-2' : 'pb-8'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-2 top-[5px] h-3.5 w-3.5 rounded-full ${
                    current ? 'live-dot border-[3px] border-ink bg-blue-500' : 'border-2 border-slate-500 bg-ink'
                  }`}
                />
                <h3 className="text-[17px] font-semibold leading-[1.35] text-slate-50">
                  {edu.degree[locale]} <span className="font-normal text-blue-400">{edu.school}</span>
                </h3>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
