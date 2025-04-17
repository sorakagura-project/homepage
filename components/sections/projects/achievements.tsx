"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Achievement } from '@/lib/types/project'

interface ProjectAchievementsProps {
  readonly achievements: readonly Achievement[]
}

export function ProjectAchievements({ achievements }: ProjectAchievementsProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">これまでの成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  {achievement.image && (
                    <div className="aspect-video relative">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-sm text-muted-foreground block mb-2">
                      {achievement.date}
                    </time>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}