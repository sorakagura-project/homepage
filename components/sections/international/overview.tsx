"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Users, Palette, Globe } from 'lucide-react'

export function ProjectOverview() {
  const features = [
    {
      title: "Innovative Performance Art",
      description: "Experience the magic of drone swarms creating stunning light shows inspired by Japanese mythology and contemporary art.",
      icon: Sparkles
    },
    {
      title: "Cultural Exchange",
      description: "Immerse yourself in Japanese culture while contributing to a groundbreaking artistic project.",
      icon: Globe
    },
    {
      title: "Community",
      description: "Join a diverse community of artists, engineers, and creators from around the world.",
      icon: Users
    },
    {
      title: "Creative Freedom",
      description: "Bring your unique perspective and skills to help shape the future of aerial performance art.",
      icon: Palette
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">About Sorakagura Project</h2>
          <p className="text-lg text-muted-foreground">
            Sorakagura (空神楽) is a pioneering project that combines drone technology with traditional Japanese kagura performances. 
            We create mesmerizing aerial displays that tell stories of hope, connection, and cultural heritage in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}