"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function ProjectVideos() {
  const videos = [
    {
      title: "空神楽の世界",
      description: "Coming",
      image: "/images/kuyoumon_droneart.png"
    },
    {
      title: "実演の舞台裏",
      description: "Coming",
      image: "/images/sorakagura_background.JPG"
    },
    {
      title: "学びと創造の現場",
      description: "Coming",
      image: "/images/art_create.JPG"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">映像で見る空神楽</h2>
          <p className="text-lg text-muted-foreground">
            光と笑顔と豊かな創造に満ちた、<br className="block sm:hidden" />わたしたちの新たな日常
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{video.description}</span>
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