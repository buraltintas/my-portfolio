'use client'

import { useLocale } from '@/i18n/useLocale'
import { siteConfig } from '@/data/site'
import { HeroCanvas } from './HeroCanvas'

const techChips = ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Redux']

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="shell grid items-center gap-12 pt-[clamp(48px,8vw,96px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-[22px]">
        <p className="font-mono text-sm text-blue-400">{t('hero.greeting')}</p>
        <h1 className="text-[clamp(34px,5vw,54px)] font-bold leading-[1.08] tracking-[-0.02em] text-slate-50 [text-wrap:balance]">
          {t('hero.title')}
        </h1>
        <p className="max-w-[560px] text-lg leading-[1.65] text-slate-300 [text-wrap:pretty]">
          {t('hero.subtitle.before')}
          {t('hero.subtitle.before') && ' '}
          <a
            href="https://www.protel.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-50 underline decoration-slate-600 underline-offset-4 hover:text-blue-300"
          >
            Protel
          </a>
          {' & '}
          <a
            href="https://simprasuite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-50 underline decoration-slate-600 underline-offset-4 hover:text-blue-300"
          >
            Simpra
          </a>
          {t('hero.subtitle.after')}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/projects"
            className="inline-flex min-h-[46px] items-center rounded-lg bg-blue-600 px-5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t('hero.cta.projects')}
          </a>
          <a
            href="/#contact"
            className="inline-flex min-h-[46px] items-center rounded-lg border border-slate-700 px-5 text-base font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
          >
            {t('hero.cta.contact')}
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center px-2 text-base text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-white"
          >
            GitHub
          </a>
        </div>

        <p className="flex flex-wrap gap-x-3.5 gap-y-1.5 border-t border-slate-800 pt-3 font-mono text-[13px] text-slate-400">
          {techChips.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
          <HeroCanvas />
        </div>
      </div>
    </section>
  )
}
