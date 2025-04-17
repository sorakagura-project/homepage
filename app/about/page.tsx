"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutDespair } from '@/components/sections/about/despair'
import { AboutHope } from '@/components/sections/about/hope'
import { AboutSorakagura } from '@/components/sections/about/sorakagura'
import { AboutSpirits } from '@/components/sections/about/spirits'
import { ParticipationLinks } from '@/components/sections/about/participation-links'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <AboutDespair />
        <AboutHope />
        <AboutSorakagura />
        <AboutSpirits />
        <ParticipationLinks />
      </main>

      <SiteFooter />
    </div>
  )
}