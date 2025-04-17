"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface Base {
  name: string
  description: string
  image: string
  features: string[]
}

interface LocationBaseProps {
  base: Base
}

export function LocationBase({ base }: LocationBaseProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">活動拠点</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={base.image}
                  alt={base.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{base.name}</h3>
                <p className="text-muted-foreground mb-6">{base.description}</p>
                <h4 className="font-semibold mb-4">施設概要</h4>
                <ul className="space-y-2">
                  {base.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
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