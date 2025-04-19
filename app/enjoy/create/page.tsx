"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CreateHero } from '@/components/sections/enjoy/create/hero'
import { CreateProjects } from '@/components/sections/enjoy/create/projects'
import { ProjectProposal } from '@/components/sections/enjoy/create/proposal'

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <CreateHero />
        <CreateProjects />
        <ProjectProposal />
      </main>

      <SiteFooter />
    </div>
  )
}