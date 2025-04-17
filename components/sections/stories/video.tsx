"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface Video {
  readonly title: string
  readonly description: string
  readonly youtubeId: string
}

interface StoryVideoProps {
  readonly video: Video
}

export function StoryVideo({ video }: StoryVideoProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">実演映像</h2>
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-muted-foreground">{video.description}</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}