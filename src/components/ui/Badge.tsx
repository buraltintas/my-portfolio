'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        variant === 'default' && 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        variant === 'outline' && 'border border-slate-600 text-slate-300',
        className
      )}
    >
      {children}
    </span>
  )
}
