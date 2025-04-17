"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AnimationGallery } from '@/components/sections/gallery/animation-gallery'
import { VideoGallery } from '@/components/sections/gallery/video-gallery'

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <AnimationGallery />
        <VideoGallery />
      </main>

      <SiteFooter />
    </div>
  )
}