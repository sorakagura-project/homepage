"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SupportHero } from '@/components/sections/support/hero'
import { SupportOptions } from '@/components/sections/support/options'
import { SupportRewards } from '@/components/sections/support/rewards'
import { SupportFAQ } from '@/components/sections/support/faq'

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <SupportHero />
        <SupportOptions />
        <SupportRewards />
        <SupportFAQ />
      </main>

      <SiteFooter />
    </div>
  )
}