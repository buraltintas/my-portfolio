'use client'

import { useLocale } from '@/i18n/useLocale'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'

export function ImpactHighlights() {
  const { t } = useLocale()

  const metrics = [
    { value: '7+', label: t('impact.production') },
    { value: '18+', label: t('impact.projects') },
    { value: '3+', label: t('impact.apps') },
    { value: '4+', label: t('impact.years') },
  ]

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {metrics.map(({ value, label }) => (
          <Card key={label} className="p-4 text-center sm:p-6">
            <p className="text-2xl font-bold text-white sm:text-3xl">{value}</p>
            <p className="mt-1 text-xs text-slate-400 sm:mt-2 sm:text-sm">{label}</p>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
