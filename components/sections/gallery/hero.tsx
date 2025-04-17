"use client"

import { motion } from 'framer-motion'

export function GalleryHero() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              ギャラリー
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            光と技術が織りなす、感動の瞬間
          </p>
        </motion.div>
      </div>
    </section>
  )
}