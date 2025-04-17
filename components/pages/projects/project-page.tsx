"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectHero } from '@/components/sections/projects/hero'
import { ProjectOverview } from '@/components/sections/projects/overview'
import { ProjectScale } from '@/components/sections/projects/spectacle/scale'
import { ProjectOptions } from '@/components/sections/projects/spectacle/options'
import { ProjectAchievements } from '@/components/sections/projects/achievements'
import { ProjectTargetAudience } from '@/components/sections/projects/target-audience'
import { ProjectGallery } from '@/components/sections/projects/gallery'
import { ProjectCommunity } from '@/components/sections/projects/community'
import { ProjectEvents } from '@/components/sections/projects/events'
import { projectsData, ProjectData } from '@/lib/data/projects'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function ProjectPage({ params }: ProjectPageProps) {
  const projectData = projectsData[params.id as keyof typeof projectsData]

  if (!projectData) {
    return notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <ProjectHero title={projectData.title} image={projectData.heroImage} />
        <ProjectOverview overview={projectData.overview} />
        {params.id === 'spectacle' && <ProjectScale />}
        {params.id === 'spectacle' && <ProjectOptions />}
        <ProjectAchievements achievements={projectData.achievements} />
        <ProjectGallery projects={projectData.subProjects} />
        <ProjectTargetAudience targets={projectData.targetAudience} />
        <ProjectCommunity discordUrl={projectData.discordUrl} />
        <ProjectEvents events={projectData.upcomingEvents} />
      </main>

      <SiteFooter />
    </div>
  )
}