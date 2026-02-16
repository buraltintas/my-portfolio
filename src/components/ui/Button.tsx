'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
      variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25',
      variant === 'secondary' && 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700',
      variant === 'ghost' && 'text-slate-300 hover:text-white hover:bg-slate-800/50',
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-5 py-2.5 text-sm',
      size === 'lg' && 'px-6 py-3 text-base',
      className
    )

    if (href) {
      const isExternal = external ?? (href.startsWith('http') || href.startsWith('mailto:'))
      return (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={classes}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
