"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function WatchEvents() {
  const events = [
    {
      id: "event1",
      title: "not scheduled",
      date: "未定",
      location: "未定",
      capacity: "未定",
      description: "",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800"
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">実演スケジュール</h1>
          <p className="text-lg text-muted-foreground">
            upcoming performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>定員 {event.capacity}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <Button asChild>
                      <Link href={`/events/${event.id}`}>
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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