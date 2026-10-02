import { cn } from '@/lib/utils'

interface DiscontinuedBadgeProps {
  label: string
  className?: string
}

export function DiscontinuedBadge({ label, className }: DiscontinuedBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-950/85 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" aria-hidden="true" />
      {label}
    </span>
  )
}
