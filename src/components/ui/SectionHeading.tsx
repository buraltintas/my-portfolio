'use client'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2
        id={id}
        className="text-[clamp(28px,3.4vw,36px)] font-bold leading-tight tracking-[-0.015em] text-slate-50"
      >
        {title}
      </h2>
      {subtitle && <p className="text-base text-slate-400">{subtitle}</p>}
    </div>
  )
}
