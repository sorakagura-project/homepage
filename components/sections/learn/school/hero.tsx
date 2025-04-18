"use client"

import { motion } from 'framer-motion'

export function SchoolHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000"
          alt="神楽塾"
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
              神楽塾
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            未来の私とわたしたちを紡ぐ、<br className="block sm:hidden" />美と探求の学びの場
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            年齢や分野を超えて、人々が集い、学び、創造する。
            テクノロジーと芸術、科学と文化が交差する場所で、
            未来を切り拓く力を育みます。
          </p>
        </motion.div>
      </div>
    </section>
  )
}