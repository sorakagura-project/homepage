"use client"

import { motion } from 'framer-motion'

export function CollabHero() {
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
              わたしたちの豊かな未来を
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo mt-4">
              心技を持ち寄り共創する
            </span>
          </h1>
          <div className="text-sm md:text-xl text-muted-foreground space-y-6 mt-8">
            <p>
              人、テクノロジー、自然、文化の分断を、
            </p>
            <p>
              神楽を通じ、つなぎ、編み直し、花開かせる。
            </p>
            <p>
              組織の課題と新たな発展の道を
            </p>
            <p>  
              わたしたちと共に切り拓きませんか？
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}