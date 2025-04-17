"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EnjoyOverview } from '@/components/sections/enjoy/overview'
import { EnjoyCategories } from '@/components/sections/enjoy/categories'

export default function EnjoyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <EnjoyOverview />
        <EnjoyCategories />
      </main>

      <SiteFooter />
    </div>
  )
}