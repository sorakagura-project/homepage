"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function CollabVision() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">ビジョン</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                空神楽プロジェクトは、加速する経済とテクノロジーの発展により、その分断を深め続ける人々とテクノロジー、自然と伝統文化の関係を再度つなぎ合わせ、
                新たな文化を生み出す活力を人々と世界に与えるプロジェクトです。
              </p>
              <p>
                荒波にのみこまれ、向かう未来像と未来を切り開く力の喪失に苦しむ現代の中で、企業、地方自治体、寺社仏閣、様々な社会活動団体の皆様と共に、人、組織、文化に新たな息吹を吹き込むことを私たちは大事なミッションとしています。
              </p>
              <p>
                パートナーの皆様と共に、技術革新と文化継承の新しい可能性を追求し、
                持続可能なだけでなく、多様な生命が躍動し調和する未来の文化創造のecosystem を構築していきます。
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}