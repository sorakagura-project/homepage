import { locationsData } from '@/lib/data/locations'
import { LocationPage } from '@/components/pages/locations/location-page'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return Object.keys(locationsData).map((id) => ({
    id: id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const locationData = locationsData[params.id as keyof typeof locationsData]

  if (!locationData) {
    return notFound()
  }

  return <LocationPage locationData={locationData} />
}