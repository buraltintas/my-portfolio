'use client'

import { useLocale } from '@/i18n/useLocale'

export function ImpactHighlights() {
  const { t } = useLocale()

  const metrics = [
    { value: '15+', label: t('impact.years') },
    { value: '7+', label: t('impact.production') },
    { value: '3+', label: t('impact.apps') },
    { value: '20+', label: t('impact.projects') },
  ]

  return (
    <section className="shell pt-[clamp(48px,7vw,80px)]" aria-label={t('impact.label')}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-slate-800 bg-slate-800 md:grid-cols-4">
        {metrics.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-0.5 bg-ink px-[22px] py-5">
            <span className="font-mono text-[30px] font-semibold text-slate-50">{value}</span>
            <span className="text-[15px] text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
