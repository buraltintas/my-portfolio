import type { Metadata } from 'next'
import { ProjectView, projectMetadata, projectParams } from '@/views/ProjectView'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projectParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return projectMetadata(slug, 'en')
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <ProjectView slug={slug} locale="en" />
}
