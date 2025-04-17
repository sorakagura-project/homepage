"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HardwareRequirements } from '@/components/sections/tool/hardware/requirements'
import { HardwareOptions } from '@/components/sections/tool/hardware/options'
import { HardwareScale } from '@/components/sections/tool/hardware/scale'
import { HardwareGuidelines } from '@/components/sections/tool/hardware/guidelines'
import { HardwareProjects } from '@/components/sections/tool/hardware/projects'

export default function HardwarePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <HardwareOptions />
        <HardwareScale />
        <HardwareRequirements />
        <HardwareGuidelines />
        <HardwareProjects />
      </main>

      <SiteFooter />
    </div>
  )
}