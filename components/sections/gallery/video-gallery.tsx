"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function VideoGallery() {
  const videos = [
    {
      id: "video1",
      title: "coming",
      description: "coming",
      embedId: ""
    },
    {
      id: "video2",
      title: "coming",
      description: "coming",
      embedId: ""
    },
    {
      id: "video3",
      title: "coming",
      description: "coming",
      embedId: ""
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
            映像ギャラリー
          </span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          プロジェクトの軌跡と、関わる人々の想い
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}