"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface Experience {
  title: string
  description: string
  image: string
}

interface LocationExperiencesProps {
  experiences: Experience[]
}

export function LocationExperiences({ experiences }: LocationExperiencesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">体験・サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground">{experience.description}</p>
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