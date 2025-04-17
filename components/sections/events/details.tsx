"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Users, Info } from 'lucide-react'

interface Details {
  readonly date: string
  readonly time: string
  readonly location: string
  readonly capacity: string
  readonly price: string
  readonly access: readonly string[]
  readonly notes: readonly string[]
}

interface EventDetailsProps {
  readonly details: Details
}

export function EventDetails({ details }: EventDetailsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">開催日</p>
                    <p className="font-semibold">{details.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">時間</p>
                    <p className="font-semibold">{details.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">場所</p>
                    <p className="font-semibold">{details.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">定員</p>
                    <p className="font-semibold">{details.capacity}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  アクセス
                </h3>
                <ul className="space-y-2">
                  {details.access.map((route, index) => (
                    <li key={index} className="text-muted-foreground">
                      {route}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  注意事項
                </h3>
                <ul className="space-y-2">
                  {details.notes.map((note, index) => (
                    <li key={index} className="text-muted-foreground">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}