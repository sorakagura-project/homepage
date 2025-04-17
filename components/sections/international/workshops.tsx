"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Users, Cpu, Palette } from 'lucide-react'

export function Workshops() {
  const workshops = [
    {
      title: "Drone Performance Creation Workshop",
      description: "Learn the basics of drone choreography and create your own aerial performance.",
      duration: "1 day",
      includes: [
        "3D animation basics",
        "Drone control fundamentals",
        "Performance design",
        "Safety guidelines"
      ],
      level: "Beginner friendly",
      language: "English support available",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
    },
    {
      title: "Japanese Culture & Technology",
      description: "Explore the intersection of traditional Japanese arts and modern technology.",
      duration: "2 days",
      includes: [
        "Traditional art forms",
        "Modern interpretations",
        "Collaborative creation",
        "Cultural exchange"
      ],
      level: "All levels welcome",
      language: "English/Japanese",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800"
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Workshops</h2>
          <p className="text-lg text-muted-foreground">
            Hands-on learning experiences for international participants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-4">{workshop.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {workshop.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Duration: {workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Level: {workshop.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Language: {workshop.language}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}