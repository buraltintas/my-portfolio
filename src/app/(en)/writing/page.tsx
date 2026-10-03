import { WritingView, writingMetadata } from '@/views/WritingView'

export const metadata = writingMetadata('en')

export default function Page() {
  return <WritingView locale="en" />
}
