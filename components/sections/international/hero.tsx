"use client"

import { motion } from 'framer-motion'

export function InternationalHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2000"
          alt="Sorakagura Project"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="container relative h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              Join Sorakagura Project
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Where Technology, Art, and Japanese Culture Meet
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience a unique fusion of drone technology and traditional Japanese culture. 
            Create breathtaking aerial performances that bridge the past and future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}