'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocale } from '@/i18n/useLocale'
import type { ProjectImage } from '@/types'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

// Web pages and phone screens sit in separate grids so a phone screen is
// never stretched to a desktop column. A click opens the image full size in
// a dialog with previous/next. Plain <img> with width and height: the site is
// a static export with unoptimized images.
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { locale, t } = useLocale()
  const [open, setOpen] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const thumbs = useRef<(HTMLButtonElement | null)[]>([])

  const wide = images.filter((image) => image.width >= image.height)
  const tall = images.filter((image) => image.width < image.height)
  const ordered = [...wide, ...tall]
  const n = ordered.length
  const isOpen = open !== null

  const close = useCallback(() => {
    setOpen((o) => {
      if (o !== null) requestAnimationFrame(() => thumbs.current[o]?.focus())
      return null
    })
  }, [])
  const step = useCallback((by: number) => setOpen((o) => (o === null ? o : (o + by + n) % n)), [n])

  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button')].filter(
          (el) => el.offsetParent !== null
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [isOpen, close, step])

  const figure = (image: ProjectImage, index: number, tallShot: boolean) => {
    // A shot far from the frame's ratio is shown whole instead of cropped.
    const off = Math.abs(image.width / image.height - (tallShot ? 9 / 19.5 : 1.6)) > 0.05
    return (
      <figure key={image.src} className="flex flex-col gap-2.5">
        <button
          type="button"
          ref={(el) => {
            thumbs.current[index] = el
          }}
          onClick={() => setOpen(index)}
          aria-label={`${t('projects.gallery.enlarge')}: ${image.caption[locale]}`}
          className={`block cursor-zoom-in overflow-hidden border bg-slate-900 ${
            tallShot ? 'rounded-2xl border-slate-700' : 'rounded-[10px] border-slate-800'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
          <img
            src={image.src}
            alt={image.caption[locale]}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className={`block w-full ${off ? 'object-contain' : 'object-cover object-top'} ${
              tallShot ? 'aspect-[9/19.5]' : 'aspect-[16/10]'
            }`}
          />
        </button>
        <figcaption className={`flex gap-2.5 leading-normal text-slate-300 ${tallShot ? 'text-[13.5px]' : 'text-[14.5px]'}`}>
          <span className="pt-0.5 font-mono text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span>
          <span>{image.caption[locale]}</span>
        </figcaption>
      </figure>
    )
  }

  const current = open === null ? null : ordered[open]
  const both = wide.length > 0 && tall.length > 0

  const arrow = (dir: -1 | 1, className: string) => (
    <button
      type="button"
      onClick={() => step(dir)}
      aria-label={dir < 0 ? t('projects.gallery.prev') : t('projects.gallery.next')}
      className={`h-11 w-11 shrink-0 rounded-full border border-slate-700 bg-slate-900 text-lg text-slate-50 ${className}`}
    >
      <span aria-hidden="true">{dir < 0 ? '←' : '→'}</span>
    </button>
  )

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="flex scroll-mt-24 flex-col gap-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 id="gallery-title" className="text-[26px] font-bold leading-tight text-slate-50">
          {t('projects.gallery')}
        </h2>
        <span className="font-mono text-[13px] text-slate-400">
          {n} {t('projects.gallery.count')}
        </span>
      </div>
      {wide.length > 0 && (
        <>
          {both && <h3 className="text-base font-semibold text-slate-300">{t('projects.gallery.web')}</h3>}
          <div className="grid gap-7 md:grid-cols-2">{wide.map((image, i) => figure(image, i, false))}</div>
        </>
      )}
      {tall.length > 0 && (
        <>
          {both && <h3 className="mt-3 text-base font-semibold text-slate-300">{t('projects.gallery.mobile')}</h3>}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(150px,44%),1fr))] gap-x-5 gap-y-7">
            {tall.map((image, i) => figure(image, wide.length + i, true))}
          </div>
        </>
      )}

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('projects.gallery')}
          className="fixed inset-0 z-[60] flex flex-col gap-3 bg-ink/95 p-4"
          onClick={(e) => {
            if (!(e.target as HTMLElement).closest('button, img')) close()
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-sm text-slate-300" aria-live="polite">
              {open! + 1} / {n}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="min-h-11 rounded-lg border border-slate-700 bg-slate-900 px-4 text-[15px] text-slate-50"
            >
              {t('projects.gallery.close')}
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center gap-3">
            {arrow(-1, 'hidden sm:block')}
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
            <img
              src={current.src}
              alt={current.caption[locale]}
              className="block max-h-full min-w-0 max-w-full rounded-xl object-contain sm:max-w-[calc(100%-120px)]"
            />
            {arrow(1, 'hidden sm:block')}
          </div>
          <div className="flex justify-center gap-3 sm:hidden">
            {arrow(-1, '')}
            {arrow(1, '')}
          </div>
          <p className="mx-auto max-w-[640px] text-center text-[15px] text-slate-300">{current.caption[locale]}</p>
        </div>
      )}
    </section>
  )
}
