"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LearnHero } from '@/components/sections/enjoy/learn/hero'
import { LearnWays } from '@/components/sections/enjoy/learn/ways'
import { LearnWorkshops } from '@/components/sections/enjoy/learn/workshops'
import { LearnSchool } from '@/components/sections/enjoy/learn/school'
import { LearnCommunity } from '@/components/sections/enjoy/learn/community'

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <LearnHero />
        <LearnWays />
        <LearnWorkshops />
        <LearnSchool />
        <LearnCommunity />
      </main>

      <SiteFooter />
    </div>
  )
}