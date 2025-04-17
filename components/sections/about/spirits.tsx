"use client"

import { motion } from 'framer-motion'

export function AboutSpirits() {
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
              あなたの光が、舞の輪を照らす
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            八百万の神々としての私たち
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-[3/4] w-full">
              <img
                src="/images/gathering-dots.jpg"
                alt="八百万の神々"
                className="rounded-lg object-cover w-full h-full shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                むかしの人びとは言いました。世界には、数えきれないほどの神が宿っていると。  
それぞれが完全ではなくとも、互いに補い合い、違いを認め合いながら、この世界の調和と豊かさを担っている、と。

                
                空神楽は、今を美しく生きたいと思うすべての人に開かれた集いの場です。  
参加者の誰もが、光を放つ存在であり、
この舞の構成者であり、創造者です。

あなたが持つ光—それが知識であれ、想いであれ、迷いであれ—
すべてがこの空にとって、大切なひとしずくです。

作る人、踊る人、学ぶ人、見守る人、語る人、感じる人。
どんな形であれ、まだ見ぬ、世界に隠れた光の参加を、心待ちにしています。
                
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}