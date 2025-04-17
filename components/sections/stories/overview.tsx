"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface StoryOverviewProps {
  readonly description: string
}

export function StoryOverview({ description }: StoryOverviewProps) {
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}