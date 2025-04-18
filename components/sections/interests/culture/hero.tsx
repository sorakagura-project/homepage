"use client"

import { motion } from 'framer-motion'

export function CultureHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552530322-835f6dedcca2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              空神楽はどのような文化を生み出すか（準備中）
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            テクノロジーと神楽が交わる淀みの中で
          </p>
        </motion.div>
      </div>
    </section>
  )
}