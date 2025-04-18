"use client"

import { motion } from 'framer-motion'

export function AboutHope() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              希望はどこから生まれるのか
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            美の中で、集い、創り、揺れ動くことが、<br className="block sm:hidden" />わたしたちの新たな光となる
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1 relative aspect-[4/3] md:aspect-[3/4] w-full">
              <img
                src="/images/future_festival.jpg"
                alt="未来のビジョン"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
            <div className="order-2 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-yujiboku">
                暗闇の中で神々は集い、情と知と技を結集し、光へと続く道を切り拓いた。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                絶望の中でも、人は集まることができます。  
誰かの心を揺さぶるような舞を、光を、物語をつくることができます。

かつて神々が岩戸の前で笑い、踊り、
光を呼び戻したように、
私たちもまた、感情を揺らし、集まり、創造することができる。

その希望の芽は、美しさの中にあります。  
完璧ではなくても、震える心と響き合いながら、
今ここにある命、創造を重ねていく美しさ。

それが、絶望を貫いて、未来を切り拓く力となります。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}