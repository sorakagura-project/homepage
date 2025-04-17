"use client"

import { motion } from 'framer-motion'

export function AboutParticipation() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              あなたの役割
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            好奇心と思いやりが紡ぐ、未来への物語
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-[4/3]">
              <img
                src="/images/future_festival.jpg"
                alt="創造的な活動"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                このプロジェクトは、すべての人の好奇心と思いやりによって成り立っています。
                アーティストとして美を創造する人、エンジニアとして技術を革新する人、
                ライターとして物語を紡ぐ人—それぞれの才能が、
                新しい未来を作る大切な力となります。
                あなたの独自の視点と創造性が、このプロジェクトをより豊かなものにします。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}