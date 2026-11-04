import { cn } from '@/lib/utils'

interface DiscontinuedBadgeProps {
  label: string
  /** accent: for a product that is coming soon rather than closed. */
  tone?: 'muted' | 'accent'
  className?: string
}

export function DiscontinuedBadge({ label, tone = 'muted', className }: DiscontinuedBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border bg-slate-950/85 px-3 py-1 text-xs font-medium backdrop-blur',
        tone === 'accent' ? 'border-blue-700 text-blue-200' : 'border-slate-600 text-slate-300',
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone === 'accent' ? 'bg-blue-400' : 'bg-slate-500')} aria-hidden="true" />
      {label}
    </span>
  )
}
