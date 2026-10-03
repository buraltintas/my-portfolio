import { WritingView, writingMetadata } from '@/views/WritingView'

export const metadata = writingMetadata('tr')

export default function Page() {
  return <WritingView locale="tr" />
}
