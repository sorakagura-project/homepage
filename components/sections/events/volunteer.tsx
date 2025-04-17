"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Gift, ArrowRight } from 'lucide-react'

interface Volunteer {
  readonly description: string
  readonly roles: readonly string[]
  readonly benefits: readonly string[]
  readonly chatUrl: string
}

interface EventVolunteerProps {
  readonly volunteer: Volunteer
}

export function EventVolunteer({ volunteer }: EventVolunteerProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">ボランティア募集</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              {volunteer.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">募集役割</h3>
                <ul className="space-y-2">
                  {volunteer.roles.map((role, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  参加特典
                </h3>
                <ul className="space-y-2">
                  {volunteer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button asChild className="w-full">
              <a
                href={volunteer.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINEオープンチャットに参加
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}