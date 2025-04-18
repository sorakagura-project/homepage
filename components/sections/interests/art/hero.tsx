"use client"

import { motion } from 'framer-motion'

export function ArtHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2000"
          alt="Art"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              芸術表現としての空神楽（準備中）
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            光と動きが織りなす、新しい芸術の可能性
          </p>
        </motion.div>
      </div>
    </section>
  )
}