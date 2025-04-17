"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Users } from 'lucide-react'

export function Events() {
  const events = [
    {
      title: "Sakura Night Story",
      description: "A mesmerizing drone performance that brings cherry blossoms to life in the night sky, accompanied by traditional Japanese music.",
      date: "April 5, 2024",
      location: "Ueno Park, Tokyo",
      capacity: "500 people",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800"
    },
    {
      title: "Summer Festival Collaboration",
      description: "Experience the fusion of traditional Japanese summer festivals with modern drone technology.",
      date: "July 2024",
      location: "Minamisoma City",
      capacity: "300 people",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">
            Join us for spectacular performances and cultural experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Capacity: {event.capacity}</span>
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