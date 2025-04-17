"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { MapPin, Train, Home } from 'lucide-react'

export function Locations() {
  const locations = [
    {
      name: "Minamisoma City, Fukushima",
      description: "A city of innovation and resilience, where traditional horse culture meets cutting-edge robotics and space technology.",
      features: [
        "Drone development facilities",
        "Cultural workshops",
        "Historical sites",
        "Nature experiences"
      ],
      access: "15 minutes by taxi from JR Haranomachi Station",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800"
    },
    {
      name: "Yokoze Town, Chichibu",
      description: "A charming town surrounded by mountains, where tradition and technology create a unique blend of old and new Japan.",
      features: [
        "Creative workspace",
        "Mountain trails",
        "Traditional festivals",
        "Art residency programs"
      ],
      access: "10 minutes walk from Yokoze Station",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
          <p className="text-lg text-muted-foreground">
            Experience Japan beyond the typical tourist destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {location.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Train className="h-4 w-4" />
                      <span>{location.access}</span>
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