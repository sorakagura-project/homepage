"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Palette, Code, FlaskRound as Flask, Heart } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  const projects = [
    {
      title: "Art & Technology Fusion",
      description: "Join our project to create innovative drone performances that blend Japanese traditional arts with cutting-edge technology. Work alongside Japanese artists and engineers to develop unique expressions.",
      icon: Palette,
      features: [
        "Collaborative creation with Japanese artists",
        "Learn traditional Japanese arts",
        "Work with latest drone technology",
        "Create cultural fusion performances"
      ],
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800"
    },
    {
      title: "Technical Development",
      description: "Contribute to the development of our drone control systems and animation software. Help us push the boundaries of what's possible with drone performances.",
      icon: Code,
      features: [
        "Software development",
        "Drone engineering",
        "UI/UX design",
        "Research and development"
      ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800"
    },
    {
      title: "Research Projects",
      description: "Engage in research projects exploring the intersection of technology, art, and Japanese culture. Perfect for academic researchers and cultural studies enthusiasts.",
      icon: Flask,
      features: [
        "Cultural research",
        "Technology studies",
        "Academic collaboration",
        "Publication opportunities"
      ],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800"
    },
    {
      title: "Community Building",
      description: "Help us create bridges between Japanese and international communities through art and technology. Organize events, workshops, and cultural exchange programs.",
      icon: Heart,
      features: [
        "Event organization",
        "Workshop facilitation",
        "Community management",
        "Cross-cultural communication"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">Projects for International Participants</h2>
          <p className="text-lg text-muted-foreground">
            Find your role in shaping the future of drone art and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <project.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">What you'll do:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="mt-auto">
                    <Link href="/join">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}