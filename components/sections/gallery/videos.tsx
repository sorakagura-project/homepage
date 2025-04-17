"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'

export function GalleryVideos() {
  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=800",
      title: "東京スカイツリー公演ダイジェスト",
      duration: "5:30"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1518141532615-4305c7bc0402?q=80&w=800",
      title: "京都・嵐山 メイキング",
      duration: "8:45"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          映像ギャラリー
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}