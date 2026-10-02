'use client'

import { useLocale } from '@/i18n/useLocale'
import type { ProjectImage } from '@/types'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

// Wide shots (web pages) and phone screens sit in separate grids so a phone
// screen is never stretched to a desktop column or a page squeezed into a
// phone one. Plain <img> with width and height: the site is a static export
// with unoptimized images, and the sizes keep the layout from jumping.
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { locale, t } = useLocale()
  const wide = images.filter((image) => image.width >= image.height)
  const tall = images.filter((image) => image.width < image.height)

  const figure = (image: ProjectImage) => (
    <figure key={image.src} className="flex flex-col gap-2">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-600"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img
          src={image.src}
          alt={image.caption[locale]}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </a>
      <figcaption className="text-xs text-slate-400 sm:text-sm">{image.caption[locale]}</figcaption>
    </figure>
  )

  return (
    <section className="mb-12" aria-labelledby="project-gallery">
      <h2 id="project-gallery" className="mb-5 text-xl font-semibold text-white">
        {t('projects.gallery')}
      </h2>
      {wide.length > 0 && (
        <div className="mb-6 grid gap-5 md:grid-cols-2">{wide.map(figure)}</div>
      )}
      {tall.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{tall.map(figure)}</div>
      )}
    </section>
  )
}
