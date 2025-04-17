"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScienceHero } from '@/components/sections/interests/science/hero'
import { ScienceTopics } from '@/components/sections/interests/science/topics'
import { ScienceProjects } from '@/components/sections/interests/science/projects'
import { ScienceWorkshops } from '@/components/sections/interests/science/workshops'

export default function SciencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <ScienceHero />
      </main>

      <SiteFooter />
    </div>
  )
}