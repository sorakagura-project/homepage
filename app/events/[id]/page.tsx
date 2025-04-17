import { eventsData } from '@/lib/data/events'
import { notFound } from 'next/navigation'
import { EventPage } from '@/components/pages/events/event-page'

export function generateStaticParams() {
  return Object.keys(eventsData).map((id) => ({
    id: id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const eventData = eventsData[params.id as keyof typeof eventsData]

  if (!eventData) {
    return notFound()
  }

  return <EventPage eventData={eventData} />
}