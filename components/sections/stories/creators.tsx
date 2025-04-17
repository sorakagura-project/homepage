"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface Creator {
  readonly name: string
  readonly role: string
  readonly image: string
  readonly description?: string
}

interface Creators {
  readonly director: Creator
  readonly team: readonly Creator[]
}

interface StoryCreatorsProps {
  readonly creators: Creators
}

export function StoryCreators({ creators }: StoryCreatorsProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">制作グループ</h2>

          <div className="mb-12">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={creators.director.image}
                    alt={creators.director.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{creators.director.name}</h3>
                  <p className="text-primary mb-4">{creators.director.role}</p>
                  {creators.director.description && (
                    <p className="text-muted-foreground">{creators.director.description}</p>
                  )}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creators.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
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