"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TechHero } from '@/components/sections/interests/technology/hero'
import { TechStack } from '@/components/sections/interests/technology/stack'
import { TechProjects } from '@/components/sections/interests/technology/projects'
import { TechWorkshops } from '@/components/sections/interests/technology/workshops'

export default function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <TechHero />
        <TechProjects />
      </main>

      <SiteFooter />
    </div>
  )
}