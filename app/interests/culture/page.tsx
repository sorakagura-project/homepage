"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CultureHero } from '@/components/sections/interests/culture/hero'
import { CultureStories } from '@/components/sections/interests/culture/stories'
import { CultureEvents } from '@/components/sections/interests/culture/events'
import { CultureProjects } from '@/components/sections/interests/culture/projects'

export default function CulturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <CultureHero />
      </main>

      <SiteFooter />
    </div>
  )
}