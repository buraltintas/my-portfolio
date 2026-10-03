'use client'

import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'

// Who he is in plain sentences: the facts people and answer engines quote,
// in the same two-column layout as the experience timeline.
export function About() {
  const { t } = useLocale()
  const paragraphs = [t('about.p1'), t('about.p2'), t('about.p3'), t('about.p4')]

  return (
    <section
      className="shell grid gap-x-12 gap-y-6 pt-[clamp(72px,10vw,120px)] lg:grid-cols-[240px_minmax(0,1fr)]"
      aria-labelledby="about"
    >
      <SectionHeading title={t('about.title')} id="about" />
      <div className="flex max-w-[720px] flex-col gap-4 text-[17px] leading-[1.7] text-slate-300">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  )
}
