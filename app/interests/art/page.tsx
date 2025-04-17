"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArtHero } from '@/components/sections/interests/art/hero'
import { ArtWorks } from '@/components/sections/interests/art/works'
import { ArtWorkshops } from '@/components/sections/interests/art/workshops'
import { ArtProjects } from '@/components/sections/interests/art/projects'

export default function ArtPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <ArtHero />
        <ArtWorks />
        <ArtWorkshops />
        <ArtProjects />
      </main>

      <SiteFooter />
    </div>
  )
}