import { projectsData } from '@/lib/data/projects'
import { ProjectPage } from '@/components/pages/projects/project-page'

export function generateStaticParams() {
  // Get all project IDs from the projectsData object
  const projectIds = Object.keys(projectsData)
  
  // Return an array of objects with the id parameter
  return projectIds.map((id) => ({
    id: id.toString()
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectPage params={params} />
}