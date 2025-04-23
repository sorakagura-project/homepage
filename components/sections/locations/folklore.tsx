"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface Story {
  title: string
  description: string
  image: string
}

interface Folklore {
  title: string
  description: string
  stories: Story[]
}

interface LocationFolkloreProps {
  folklore: Folklore[]
}

export function LocationFolklore({ folklore }: LocationFolkloreProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {folklore.map((item, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{item.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {item.stories.map((story, storyIndex) => (
                <div key={storyIndex} className="rounded-lg overflow-hidden shadow">
                <img src={story.image} alt={story.title} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                    <p className="text-muted-foreground">{story.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}