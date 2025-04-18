"use client"

import { motion } from 'framer-motion'

export function JoinHero() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-2xl md:text-4xl md:text-5xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              あなたの「好き」が、
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo mt-4">
              みんなの「希望」になる
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mt-8 space-y-4">
            <span className="block">
              技術が好き、表現が好き、人と話すのが好き、
              物語を作るのが好き、<br className="block sm:hidden" />文化が好き、未来が好き。
            </span>
            <span className="block">
              あなたの「好き」を活かして、
              <br className="block sm:hidden" />新しい文化体験を<br className="block sm:hidden" />一緒に創り出しませんか？
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}