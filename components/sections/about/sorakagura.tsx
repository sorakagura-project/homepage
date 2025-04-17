"use client"

import { motion } from 'framer-motion'

export function AboutSorakagura() {
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
              空神楽　〜光を編む、舞のはじまり〜
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            人々と、テクノロジー、文化が交わる、わたしたちの新たな祝祭へ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                
                空神楽とは、今を生きる私たちがともに舞う、現代の「天岩戸」への応えです。

それは、闇に閉ざされた空に、
そっと灯るひとつの光からはじまる舞です。  
誰かが誰かの心をたたき起こし、
その感情が、次の誰かの手を動かす。  
そうして舞は、重なり、連なり、いつしか大きなうねりとなって空を巡るのです。

人とロボット、子どもと大人、科学と芸術、伝統と革新——
あらゆるもののあいだにある垣根をゆるやかにほどき、
それぞれの光を持ち寄って、美しい舞を重ねていく共創の場です。

ドローンは生命のように舞い、
アルゴリズムは水のように生命の間を流れ、
人々は互いの想像と創造に触れながら、
かつてない関係性を編み出していきます。

空神楽は、現代に蘇る「舞台」であり、
人類が再び"わたしたち"を見出すための儀式でもあるのです。
              </p>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <img
                src="/images/amanoiwato.jpeg"
                alt="空神楽の世界"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}