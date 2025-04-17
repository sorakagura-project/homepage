import { storiesData, type StoryId } from '@/lib/data/stories'
import { StoryPage } from '@/components/pages/stories/story-page'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return Object.keys(storiesData).map((id) => ({
    id: id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const storyData = storiesData[params.id as StoryId]

  if (!storyData) {
    return notFound()
  }

  return <StoryPage storyData={storyData} />
}