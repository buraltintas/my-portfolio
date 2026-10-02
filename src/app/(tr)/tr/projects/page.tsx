import { ProjectsView, projectsMetadata } from '@/views/ProjectsView'

export const metadata = projectsMetadata('tr')

export default function Page() {
  return <ProjectsView locale="tr" />
}
