"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolSoftware } from '@/components/sections/tool/software/software'
import { ToolTutorials } from '@/components/sections/tool/software/tutorials'
import { ToolWorkshops } from '@/components/sections/tool/software/workshops'
import { ToolProjects } from '@/components/sections/tool/software/projects'

export default function ToolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <ToolSoftware />
        <ToolTutorials />
        <ToolWorkshops />
        <ToolProjects />
      </main>

      <SiteFooter />
    </div>
  )
}