"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function GalleryGrid() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=800",
      title: "東京スカイツリー初公演",
      date: "2023.12"
    },
    {
      src: "https://images.unsplash.com/photo-1518141532615-4305c7bc0402?q=80&w=800",
      title: "京都・嵐山での特別公演",
      date: "2024.01"
    },
    {
      src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800",
      title: "国際ドローンアート展",
      date: "2024.02"
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      title: "テクノロジー実験",
      date: "2024.03"
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-muted-foreground">{image.date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}