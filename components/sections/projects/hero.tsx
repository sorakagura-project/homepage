"use client"

import { motion } from 'framer-motion'

interface ProjectHeroProps {
  title: string
  image: string
}

export function ProjectHero({ title, image }: ProjectHeroProps) {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="container relative h-full flex items-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        </motion.div>
      </div>
    </section>
  )
}