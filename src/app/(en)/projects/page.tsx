import { ProjectsView, projectsMetadata } from '@/views/ProjectsView'

export const metadata = projectsMetadata('en')

export default function Page() {
  return <ProjectsView locale="en" />
}
