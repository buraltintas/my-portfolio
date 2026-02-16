import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-slate-200 mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4 ml-4">{children}</ol>
    ),
    li: ({ children }) => <li className="text-slate-300">{children}</li>,
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-400 my-4">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-800 text-blue-300 px-1.5 py-0.5 rounded text-sm">{children}</code>
    ),
    ...components,
  }
}
