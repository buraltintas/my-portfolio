'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { useLocale } from '@/i18n/useLocale'
import { siteConfig } from '@/data/site'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { DiscontinuedBadge } from '@/components/projects/DiscontinuedBadge'
import { ProjectLinks, projectKinds } from '@/components/projects/ProjectLinks'
import type { LocaleString, Project } from '@/types'

interface ProjectDetailProps {
  project: Project
  next?: { slug: string; title: LocaleString }
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Gives every <h2> in the case study an id, and returns them for the
// "on this page" list.
function withHeadingIds(html: string) {
  const headings: { id: string; text: string }[] = []
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').trim()
    const id = slugify(text) || `section-${headings.length + 1}`
    headings.push({ id, text })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { html: out, headings }
}

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  const { locale, t, path } = useLocale()
  const raw = locale === 'tr' && project.contentTr ? project.contentTr : project.content
  const discontinued = project.status === 'discontinued'
  const { html, headings } = useMemo(() => withHeadingIds(raw ?? ''), [raw])
  const kinds = projectKinds(project)
  const hasGallery = project.gallery.length > 0

  // Who built it comes first: it ties every case study to the author's name.
  const byline = (
    <Link href={path('/')} className="text-slate-50 underline decoration-slate-600 underline-offset-4 hover:text-blue-300">
      {siteConfig.name}
    </Link>
  )
  const meta = [
    { term: t('projects.meta.by'), value: byline, mono: false },
    kinds ? { term: t('projects.meta.platform'), value: kinds, mono: false } : null,
    project.tech.length ? { term: t('projects.meta.tech'), value: project.tech.join(', '), mono: true } : null,
  ].filter(Boolean) as { term: string; value: ReactNode; mono: boolean }[]

  // In page order: closed projects show their screenshots before the text.
  const galleryItem = hasGallery ? [{ id: 'gallery', text: t('projects.gallery') }] : []
  const toc = discontinued ? [...galleryItem, ...headings] : [...headings, ...galleryItem]
  const tocKey = toc.map((item) => item.id).join(' ')
  const [active, setActive] = useState<string | undefined>(toc[0]?.id)

  useEffect(() => {
    const targets = tocKey
      .split(' ')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (targets.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -60% 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [tocKey])

  return (
    <div className="pb-[clamp(56px,8vw,88px)]">
      <div className="shell pt-5">
        <Link
          href={path('/projects')}
          className="inline-flex min-h-11 items-center font-mono text-sm text-slate-300 hover:text-white"
        >
          <span aria-hidden="true">←&nbsp;</span>
          {t('projects.backAll')}
        </Link>
      </div>

      <section className="shell flex flex-wrap items-start gap-x-14 gap-y-8 pt-4">
        <div className="flex min-w-0 flex-[3_1_min(560px,100%)] flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[clamp(40px,6vw,60px)] font-bold leading-[1.02] tracking-[-0.025em] text-slate-50">
              {project.title[locale]}
            </h1>
            {discontinued && <DiscontinuedBadge label={t('projects.discontinued')} />}
          </div>
          <p className="max-w-[620px] text-[clamp(18px,2vw,21px)] leading-[1.55] text-slate-300 [text-wrap:pretty]">
            {project.description[locale]}
          </p>
          {discontinued && <p className="max-w-[620px] text-[15px] text-slate-400">{t('projects.discontinuedNote')}</p>}
          <ProjectLinks project={project} variant="button" primaryFirst className="pt-1.5" />
        </div>
        {meta.length > 0 && (
          <dl className="grid flex-[1_1_280px] grid-cols-[auto_minmax(0,1fr)] border-t border-slate-800 text-[15px] leading-normal">
            {meta.map((row, i) => (
              <div key={row.term} className="contents">
                <dt
                  className={`py-3 pr-[18px] font-mono text-[13px] text-slate-400 ${
                    i < meta.length - 1 ? 'border-b border-slate-800' : ''
                  }`}
                >
                  {row.term}
                </dt>
                <dd
                  className={`py-3 ${row.mono ? 'font-mono text-[13px] leading-[1.7] text-slate-300' : ''} ${
                    i < meta.length - 1 ? 'border-b border-slate-800' : ''
                  }`}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <div className="shell pt-10">
        {/* A cover that is not 16:9 is shown whole over a blurred copy of itself. */}
        <div className="relative aspect-video overflow-hidden rounded-[14px] border border-slate-800 bg-slate-900">
          <Image
            src={project.image}
            alt=""
            aria-hidden="true"
            fill
            className="scale-110 object-cover opacity-40 blur-2xl"
            sizes="(max-width: 1120px) 100vw, 1080px"
          />
          <Image
            src={project.image}
            alt={`${project.title[locale]} ${t('projects.screenshot')}`}
            fill
            className="object-contain"
            sizes="(max-width: 1120px) 100vw, 1080px"
            priority
          />
        </div>
      </div>

      {discontinued && hasGallery && (
        <div className="shell pt-[clamp(48px,7vw,80px)]">
          <ProjectGallery images={project.gallery} />
        </div>
      )}

      {html && (
        <div className="shell grid gap-x-16 gap-y-10 pt-[clamp(48px,7vw,80px)] lg:grid-cols-[minmax(0,700px)_minmax(220px,1fr)]">
          <article
            className="project-content min-w-0"
            lang={locale}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {toc.length > 1 && (
            <nav
              aria-label={t('projects.onThisPage')}
              className="order-first flex flex-col self-start border-l border-slate-800 pl-5 text-[15px] lg:sticky lg:top-24 lg:order-none"
            >
              <span className="pb-1.5 font-mono text-[13px] text-slate-400">{t('projects.onThisPage')}</span>
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`flex min-h-9 items-center hover:text-white ${
                    active === item.id ? 'text-slate-50' : 'text-slate-300'
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}

      {!discontinued && hasGallery && (
        <div className="shell pt-[clamp(64px,9vw,104px)]">
          <ProjectGallery images={project.gallery} />
        </div>
      )}

      <nav aria-label={t('projects.pagination')} className="shell pt-[clamp(64px,9vw,104px)]">
        <div className="grid gap-px overflow-hidden rounded-[10px] border border-slate-800 bg-slate-800 sm:grid-cols-2">
          <Link
            href={path('/projects')}
            className="flex flex-col gap-1 bg-ink px-[22px] py-5 hover:bg-slate-900 focus-visible:-outline-offset-2"
          >
            <span className="font-mono text-[13px] text-slate-400">
              <span aria-hidden="true">← </span>
              {t('projects.backAll')}
            </span>
            <span className="text-lg font-semibold text-slate-50">{t('projects.subtitle')}</span>
          </Link>
          {next && (
            <Link
              href={path(`/projects/${next.slug}`)}
              className="flex flex-col gap-1 bg-ink px-[22px] py-5 text-right hover:bg-slate-900 focus-visible:-outline-offset-2"
            >
              <span className="font-mono text-[13px] text-slate-400">
                {t('projects.next')}
                <span aria-hidden="true"> →</span>
              </span>
              <span className="text-lg font-semibold text-slate-50">{next.title[locale]}</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
