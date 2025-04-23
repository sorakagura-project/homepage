"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/sections/hero-section'
import { Amanoiwato } from '@/components/sections/top/amanoiwato'
import { ProjectOverview } from '@/components/sections/top/project-overview'
import { ProjectVideos } from '@/components/sections/top/project-videos'
import { ProjectValues } from '@/components/sections/top/project-values'
import { EnjoymentWays } from '@/components/sections/top/enjoyment-ways'
import { FollowUs } from '@/components/sections/top/follow-us'
import { ProjectNews } from '@/components/sections/top/project-news'
import { PartnerOrganizations} from '@/components/sections/top/partner-organizations'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <HeroSection />
        <Amanoiwato />
        <ProjectOverview />
        <ProjectVideos />
        <EnjoymentWays />
        <ProjectValues />
        <FollowUs />
        <ProjectNews />
        <PartnerOrganizations />
      </main>

      <SiteFooter />
    </div>
  )
}