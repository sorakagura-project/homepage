"use client"

import { motion } from 'framer-motion'

interface StoryHeroProps {
  readonly title: string
}

export function StoryHero({ title }: StoryHeroProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              {title}
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}