import { serializeGraph } from '@/lib/jsonld'

export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeGraph(graph) }} />
}
