"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StoryHero } from '@/components/sections/stories/hero'
import { StoryAnimation } from '@/components/sections/stories/animation'
import { StoryOverview } from '@/components/sections/stories/overview'
import { StoryCreators } from '@/components/sections/stories/creators'
import { StoryVideo } from '@/components/sections/stories/video'
import { StoryDownload } from '@/components/sections/stories/download'
import type { Story } from '@/lib/data/stories'

interface StoryPageProps {
  readonly storyData: Story
}

export function StoryPage({ storyData }: StoryPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <StoryHero title={storyData.title} />
        <StoryAnimation animationData={storyData.animationData} />
        <StoryOverview description={storyData.description} />
        <StoryCreators creators={storyData.creators} />
        <StoryVideo video={storyData.video} />
        <StoryDownload download={storyData.download} />
      </main>

      <SiteFooter />
    </div>
  )
}