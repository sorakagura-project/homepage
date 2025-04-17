"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code, Heart, Users } from 'lucide-react'

export function ToolOpenSource() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">オープンソースの価値と空神楽プロジェクトの取り組み</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            すべての命が輝く未来のために
          </p>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <Code className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">透明性と民主性の追求</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                AIや遺伝子編集技術など、高度に複雑化し、不透明かつ、人の命や生態系の繁栄へかつてないほどに強い影響をもつテクノロジーが現在急速に発展しています。ターミネーターやビッグブラザーに支配される未来が訪れても全くおかしくありません。
                そして、これらの技術の開発、社会応用は少数の専門家や企業の判断に大きく依存するようになっています。
                これは、現代における新たな形の全体主義とも言えるかもしれません。
              </p>

              <p>
                人類の歴史は、多様な価値観を社会に反映させることの重要性を私たちに教えてきました。
                私たちの体の内外を取り巻くアルゴリズムと真摯に向き合い、
                すべての命が輝く未来を築くために、オープンソースの文化を守り育てていく必要があります。
              </p>

              <div className="flex items-center gap-4 mt-8 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">私たちの取り組み</h3>
              </div>

              <p>
                しかしテクノロジーの発展は、大きな危機の可能性と同時に、個人、そして私たちが豊かな未来を創造する可能性も大きく開いています。空神楽プロジェクトは、目前に迫るこれらの危機と希望に対して、
                芸術と舞踊を通じた歓びとエネルギーを糧に、オープンソースの上で美しく創造的な実践を育もうとしています。
                私たちの開発するソフトウェアやハードウェアの設計は公開され、
                誰もが参照し、改善を提案し、新しい可能性を探求できます。
              </p>

              <div className="flex items-center gap-4 mt-8 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">共に創る未来</h3>
              </div>

              <p>
                技術の発展は、私たちの生活をより豊かにする可能性を秘めています。
                ”今”とは、常に可能性の束として存在します。一直線に流れる時の流れの一つの点ではありません。
                技術で開かれる可能性が私利私欲に満ちた誰かではなく、
                社会全体で共有され、議論され、より良い方向に導かれていくために、
                オープンソースの技術/精神を、より多様で豊かな人とテクノロジーのエコシステムへと発展させていきましょう。
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}