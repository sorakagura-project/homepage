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
  folklore: Folklore
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
          <h2 className="text-3xl font-bold mb-4">{folklore.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{folklore.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {folklore.stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-muted-foreground">{story.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}