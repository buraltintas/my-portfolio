'use client'

import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/site'

const socials = [
  { href: siteConfig.socials.github, label: 'GitHub' },
  { href: siteConfig.socials.linkedin, label: 'LinkedIn' },
  { href: siteConfig.socials.twitter, label: 'X' },
  { href: siteConfig.socials.medium, label: 'Medium' },
  { href: siteConfig.socials.instagram, label: 'Instagram' },
]

export function ContactSection() {
  const { t } = useLocale()

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="shell grid scroll-mt-20 items-end gap-x-12 gap-y-7 pb-[clamp(64px,8vw,96px)] pt-[clamp(72px,10vw,120px)] md:grid-cols-2"
    >
      <div className="flex flex-col gap-3.5">
        <SectionHeading title={t('contact.title')} id="contact-title" />
        <p className="text-[17px] text-slate-300">{t('contact.subtitle')}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="break-all text-[clamp(18px,2.4vw,24px)] font-semibold text-blue-400 underline underline-offset-[5px] hover:text-blue-300"
        >
          {siteConfig.email}
        </a>
      </div>
      <ul className="flex flex-wrap gap-2">
        {socials.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-3.5 text-[15px] text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
