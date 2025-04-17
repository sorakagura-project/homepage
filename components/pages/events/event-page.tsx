"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EventHero } from '@/components/sections/events/hero'
import { EventOverview } from '@/components/sections/events/overview'
import { EventCreators } from '@/components/sections/events/creators'
import { EventDetails } from '@/components/sections/events/details'
import { EventVolunteer } from '@/components/sections/events/volunteer'

interface Creator {
  readonly name: string
  readonly role: string
  readonly image: string
  readonly description?: string
}

interface Creators {
  readonly director: Creator
  readonly team: readonly Creator[]
}

interface Details {
  readonly date: string
  readonly time: string
  readonly location: string
  readonly capacity: string
  readonly price: string
  readonly access: readonly string[]
  readonly notes: readonly string[]
}

interface Overview {
  readonly description: string
  readonly highlights: readonly string[]
}

interface Volunteer {
  readonly description: string
  readonly roles: readonly string[]
  readonly benefits: readonly string[]
  readonly chatUrl: string
}

interface EventData {
  readonly title: string
  readonly heroImage: string
  readonly overview: Overview
  readonly creators: Creators
  readonly details: Details
  readonly volunteer: Volunteer
}

interface EventPageProps {
  readonly eventData: EventData
}

export function EventPage({ eventData }: EventPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <EventHero title={eventData.title} image={eventData.heroImage} />
        <EventOverview overview={eventData.overview} />
        <EventCreators creators={eventData.creators} />
        <EventDetails details={eventData.details} />
        <EventVolunteer volunteer={eventData.volunteer} />
      </main>

      <SiteFooter />
    </div>
  )
}