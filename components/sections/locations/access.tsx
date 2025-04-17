"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Train, Car } from 'lucide-react'

interface Access {
  address: string
  transportation: string[]
  parking: string
  googleMapsUrl: string
}

interface LocationAccessProps {
  access: Access
}

export function LocationAccess({ access }: LocationAccessProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">アクセス</h2>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold">{access.address}</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Train className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">公共交通機関でのアクセス</h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {access.transportation.map((route, index) => (
                    <li key={index} className="text-muted-foreground">
                      {route}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">駐車場</h3>
                </div>
                <p className="text-muted-foreground ml-7">{access.parking}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="w-full">
                <a
                  href={access.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Mapsで見る
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}