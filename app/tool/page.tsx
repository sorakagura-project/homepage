"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolHero } from '@/components/sections/tool/hero'
import { ToolProcess } from '@/components/sections/tool/process'
import { ToolLinks } from '@/components/sections/tool/links'
import { ToolOpenSource } from '@/components/sections/tool/opensource'

export default function ToolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <ToolHero />
        <ToolProcess />
        <ToolLinks />
        <ToolOpenSource />
      </main>

      <SiteFooter />
    </div>
  )
}