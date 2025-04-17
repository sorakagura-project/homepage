"use client"

import { motion } from 'framer-motion'

export function ScienceHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Science"
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
              科学的探求を誘う空神楽(準備中)
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            宇宙、生命、意識、計算　〜新たに拡がるフロンティアの探求〜
          </p>
        </motion.div>
      </div>
    </section>
  )
}