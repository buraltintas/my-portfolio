'use client'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
