"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JoinHero } from '@/components/sections/join/hero'
import { JoinRoles } from '@/components/sections/join/roles'
import { JoinBenefits } from '@/components/sections/join/benefits'
import { JoinNotice } from '@/components/sections/join/notice'
import { JoinWays } from '@/components/sections/join/ways'

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <JoinHero />
        <JoinRoles />
        <JoinNotice />
        <JoinWays />
      </main>

      <SiteFooter />
    </div>
  )
}