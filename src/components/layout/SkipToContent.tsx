'use client'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 z-[100] -translate-y-full bg-blue-600 px-4 py-2 text-white transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  )
}
