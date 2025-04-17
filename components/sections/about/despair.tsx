"use client"

import { motion } from 'framer-motion'

export function AboutDespair() {
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
              光を失った世界で
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            不安、孤独、絶望に覆われるわたしたち
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                かつて光のありかが失われた時、世界は闇に覆われた。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                今、私たちの生きる世界は、静かに光を失いかけています。  
便利さと引き換えに、言葉は短くなり、つながりは希薄になり、
誰かの笑顔の奥に潜む不安や孤独が、そっと社会を包み込んでいます。

助け合いを奪い加速し続ける経済競争と、先の見えない気候変動と社会の未来、
私たちの仕事、そして生きる意味すら奪いかねないAIの発展は、
人と人、生命と世界のあいだに、大きな壁をつくりはじめています。

誰かと共にあるはずなのに、ひとり。  
知識も技術もあるはずなのに、希望が見えない。
そんな時代に、私たちは立たされています。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                けれど、この状況に痛みや虚しさを感じるのは、まだ私たちが生きようとしている証でもあります。
                制御できずに暴走を続ける経済、テクノロジー、社会に、本当に希望はないのでしょうか？
              </p>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <img
                src="/images/dark.jpg"
                alt="光を失った世界"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}