"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocationHero } from '@/components/sections/locations/hero'
import { LocationOverview } from '@/components/sections/locations/overview'
import { LocationBase } from '@/components/sections/locations/base'
import { LocationExperiences } from '@/components/sections/locations/experiences'
import { LocationFolklore } from '@/components/sections/locations/folklore'
import { LocationAccess } from '@/components/sections/locations/access'
import { LocationProjects } from '@/components/sections/locations/projects'
import { type LocationId, locationsData, Base, Experience, Story, Folklore, Access, Project } from '@/lib/data/locations'

type LocationData = typeof locationsData[LocationId]

interface LocationPageProps {
  locationData: LocationData
}

export function LocationPage({ locationData }: LocationPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <LocationHero name={locationData.name} image={locationData.heroImage} />
        <LocationOverview overview={locationData.overview} />
        <LocationBase base={locationData.base} />
        <LocationExperiences experiences={locationData.experiences} />
        <LocationFolklore folklore={locationData.folklore} />
        <LocationAccess access={locationData.access} />
        <LocationProjects projects={locationData.relatedProjects} />
      </main>

      <SiteFooter />
    </div>
  )
}