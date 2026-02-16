'use client'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Burak Altıntaş
        </p>
      </div>
    </footer>
  )
}
