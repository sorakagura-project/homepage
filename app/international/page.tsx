"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { InternationalHero } from '@/components/sections/international/hero'
import { ProjectOverview } from '@/components/sections/international/overview'
import { Locations } from '@/components/sections/international/locations'
import { Events } from '@/components/sections/international/events'
import { Workshops } from '@/components/sections/international/workshops'
import { Projects } from '@/components/sections/international/projects'
import { LifeInJapan } from '@/components/sections/international/life-in-japan'
import { FAQ } from '@/components/sections/international/faq'

export default function InternationalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <InternationalHero />
        <ProjectOverview />
        <Locations />
        <Events />
        <Workshops />
        <Projects />
        <LifeInJapan />
        <FAQ />
      </main>

      <SiteFooter />
    </div>
  )
}