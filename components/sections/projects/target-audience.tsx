"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Users } from 'lucide-react'

interface Target {
  readonly type: string
  readonly description: string
}

interface ProjectTargetAudienceProps {
  readonly targets: readonly Target[]
}

export function ProjectTargetAudience({ targets }: ProjectTargetAudienceProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">例えばこんな方におすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <motion.div
                key={target.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{target.type}</h3>
                  <p className="text-muted-foreground">{target.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}