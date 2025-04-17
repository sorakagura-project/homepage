"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WatchHero } from '@/components/sections/enjoy/watch/hero'
import { WatchEvents } from '@/components/sections/enjoy/watch/events'
import { WatchCalendar } from '@/components/sections/enjoy/watch/calendar'
import { WatchParticipation } from '@/components/sections/enjoy/watch/participation'
import { WatchWorkshops } from '@/components/sections/enjoy/watch/workshops'

export default function WatchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <WatchHero />
        <WatchEvents />
        <WatchCalendar />
        <WatchParticipation />
        <WatchWorkshops />
      </main>

      <SiteFooter />
    </div>
  )
}