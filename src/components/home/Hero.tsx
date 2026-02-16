'use client'

import { useLocale } from '@/i18n/useLocale'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/data/site'
import { HeroFallback } from './HeroFallback'
import { HeroCanvas } from './HeroCanvas'

const techChips = ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Redux']

export function Hero() {
  const { t } = useLocale()

  return (
    <AnimatedSection className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 md:flex-row md:py-32">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-2 text-sm font-medium text-blue-400">{t('hero.greeting')}</p>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mb-6 max-w-lg text-base text-slate-400 sm:mb-8 sm:text-lg">
            {t('hero.subtitle.before')}
            {t('hero.subtitle.before') && ' '}
            <a
              href="https://simprasuite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-blue-400 transition-colors"
            >
              Simpra
            </a>
            {t('hero.subtitle.after')}
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="/projects" variant="primary">
              {t('hero.cta.projects')}
            </Button>
            <Button href="/#contact" variant="secondary">
              {t('hero.cta.contact')}
            </Button>
            <Button href={siteConfig.socials.github} variant="ghost">
              GitHub &rarr;
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {techChips.map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* 3D Scene / Fallback */}
        <div className="flex-1 flex items-center justify-center">
          <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
            <HeroCanvas />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
