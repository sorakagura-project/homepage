"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function SchoolMessage() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ポストAI時代の教育へ
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AI/ロボットの発展によって仕事、さらには人間の生きる意味すらも失われるのではと言われています。
私はそうではないと考えています。
              </p>
              <p>
                世界、私たちは大きな樹のようです。一人一人が美しい創造を開かせながら、高く広く空に伸びていく大樹です。
AIはその伸びる速度を変えるだけかもしれないし、もしくはこの大樹の形を大きく変えるかもしれない。
              </p>
              <p>
                しかし、この世界にはまだたくさんのフロンティアが間違いなくあります。
生命はどこからきたのか。宇宙はひとつなのか、無限にあるのか。
命を宿したロボットはどう作れるだろう。お金のない世界はどう作れるだろう。
この学び場では、みんなで場所と好奇心を共有しながら、この世界に咲かせる新たな創造を美しく楽しく模索します。
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}