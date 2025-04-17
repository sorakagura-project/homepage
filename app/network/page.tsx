"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { NetworkHero } from '@/components/sections/network/hero'
import { RegionalExchange } from '@/components/sections/network/regional-exchange'
import { NationalEvents } from '@/components/sections/network/national-events'
import { NetworkMap } from '@/components/sections/network/map'
import { NetworkProjects } from '@/components/sections/network/projects'

export default function NetworkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <NetworkHero />
        <NetworkMap />
        <RegionalExchange />
        <NationalEvents />
        <NetworkProjects />
      </main>

      <SiteFooter />
    </div>
  )
}