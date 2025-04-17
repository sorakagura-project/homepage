"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SchoolHero } from '@/components/sections/learn/school/hero'
import { SchoolConcept } from '@/components/sections/learn/school/concept'
import { SchoolMessage } from '@/components/sections/learn/school/message'
import { SchoolEnvironment } from '@/components/sections/learn/school/environment'
import { SchoolFields } from '@/components/sections/learn/school/fields'
import { SchoolStages } from '@/components/sections/learn/school/stages'
import { SchoolPrograms } from '@/components/sections/learn/school/programs'
import { SchoolPlans } from '@/components/sections/learn/school/plans'
import { SchoolProcess } from '@/components/sections/learn/school/process'
import { SchoolTeaching } from '@/components/sections/learn/school/teaching'
import { SchoolInclusive } from '@/components/sections/learn/school/inclusive'

export default function SchoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <SchoolHero />
        <SchoolConcept />
        <SchoolMessage />
        <SchoolEnvironment />
        <SchoolFields />
        <SchoolStages />
        <SchoolPrograms />
        <SchoolPlans />
        <SchoolProcess />
        <SchoolTeaching />
        <SchoolInclusive />
      </main>

      <SiteFooter />
    </div>
  )
}