"use client"

import { motion } from 'framer-motion'

export function EnjoyOverview() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8">楽しみ方</h1>
          <p className="text-lg leading-relaxed mb-6">
            空神楽プロジェクトには、様々な関わり方があります。
            鑑賞者として美しい光の物語を体験するもよし、
            創造者として新しい表現に挑戦するもよし。
            あなたの興味や得意分野に合わせて、
            最適な参加方法を見つけてください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}