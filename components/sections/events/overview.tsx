"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

interface Overview {
  readonly description: string
  readonly highlights: readonly string[]
}

interface EventOverviewProps {
  readonly overview: Overview
}

export function EventOverview({ overview }: EventOverviewProps) {
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {overview.description}
            </p>
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                見どころ
              </h2>
              <ul className="space-y-3">
                {overview.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}