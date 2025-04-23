"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MemberHero } from '@/components/sections/member/hero'
import { MemberGrid } from '@/components/sections/member/grid'

export default function MemberPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <MemberHero />
        <MemberGrid />
      </main>

      <SiteFooter />
    </div>
  )
}
