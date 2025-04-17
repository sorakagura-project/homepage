"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Home, Train, Utensils, Heart, GraduationCap, Users } from 'lucide-react'

export function LifeInJapan() {
  const aspects = [
    {
      title: "Housing Support",
      description: "We assist with finding accommodation in our project locations (Minamisoma City and Yokoze Town). Both areas offer affordable housing options compared to major cities.",
      icon: Home,
      points: [
        "Help with apartment hunting",
        "Support for contract procedures",
        "Introduction to local real estate agents",
        "Shared housing options available"
      ]
    },
    {
      title: "Transportation",
      description: "Both locations are accessible by train and have good local transportation networks. We'll help you understand the local transportation system.",
      icon: Train,
      points: [
        "Guide to local transportation",
        "Help with train pass application",
        "Information about bicycle rentals",
        "Support for getting around"
      ]
    },
    {
      title: "Daily Life",
      description: "We provide support for setting up your life in Japan, from administrative procedures to daily necessities.",
      icon: Utensils,
      points: [
        "Resident registration assistance",
        "Bank account setup support",
        "Mobile phone contract help",
        "Local shopping guidance"
      ]
    },
    {
      title: "Community",
      description: "Join our diverse community of creators, engineers, and artists from both Japan and abroad.",
      icon: Users,
      points: [
        "Regular community events",
        "Cultural exchange activities",
        "Language exchange opportunities",
        "Local community integration"
      ]
    },
    {
      title: "Learning",
      description: "Access to learning opportunities both in technology and Japanese culture.",
      icon: GraduationCap,
      points: [
        "Japanese language support",
        "Technical workshops",
        "Cultural workshops",
        "Mentorship programs"
      ]
    },
    {
      title: "Well-being",
      description: "We care about your well-being and provide support for a comfortable life in Japan.",
      icon: Heart,
      points: [
        "Healthcare system guidance",
        "Mental health support",
        "Work-life balance focus",
        "Emergency support system"
      ]
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
          <h2 className="text-3xl font-bold mb-4">Life in Japan</h2>
          <p className="text-lg text-muted-foreground">
            Supporting your journey in Japan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <aspect.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{aspect.title}</h3>
                <p className="text-muted-foreground mb-4">{aspect.description}</p>
                <ul className="space-y-2">
                  {aspect.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}