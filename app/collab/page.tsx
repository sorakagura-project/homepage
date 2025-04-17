"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CollabHero } from '@/components/sections/collab/hero'
import { CollabVision } from '@/components/sections/collab/vision'
import { CollabPartners } from '@/components/sections/collab/partners'
import { CollabSupport } from '@/components/sections/collab/support'
import { CollabContact } from '@/components/sections/collab/contact'

export default function CollabPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <CollabHero />
        <CollabVision />
        <CollabPartners />
        <CollabSupport />
        <CollabContact />
      </main>

      <SiteFooter />
    </div>
  )
}