"use client"

import { motion } from 'framer-motion'

export function AboutHero() {
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
              空神楽プロジェクトについて
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            テクノロジーと伝統が織りなす、新しい物語の始まり
          </p>
        </motion.div>
      </div>
    </section>
  )
}