"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { GlobalHero } from '@/components/sections/global/hero'
import { GlobalEvents } from '@/components/sections/global/events'
import { GlobalExchanges } from '@/components/sections/global/exchanges'
import { GlobalCompetitions } from '@/components/sections/global/competitions'
import { GlobalResidencies } from '@/components/sections/global/residencies'
import { GlobalSupport } from '@/components/sections/global/support'

export default function GlobalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <GlobalHero />
        <GlobalEvents />
        <GlobalExchanges />
        <GlobalCompetitions />
        <GlobalResidencies />
        <GlobalSupport />
      </main>

      <SiteFooter />
    </div>
  )
}