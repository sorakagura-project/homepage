"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TravelHero } from '@/components/sections/enjoy/travel/hero'
import { TravelMap } from '@/components/sections/enjoy/travel/map'
import { TravelResidence } from '@/components/sections/enjoy/travel/residence'
import { TravelServices } from '@/components/sections/enjoy/travel/services'
import { GlobalChallenge } from '@/components/sections/enjoy/travel/global-challenge'

export default function TravelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <TravelHero />
        <TravelMap />
        <TravelResidence />
        <TravelServices />
        <GlobalChallenge />
      </main>

      <SiteFooter />
    </div>
  )
}