"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Heart } from 'lucide-react'

export function SchoolInclusive() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-12">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">インクルーシブ教育への取り組み</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                神楽塾では、一人一人の個性や特性を大切にした教育を実践しています。
                特にギフテッドの子どもたちに対しては、その優れた能力や独特の感性を活かせる
                学習環境を提供します。
              </p>
              <p>
                また、発達障害や学習障害のある方に対しても、個々の特性に応じた
                柔軟な学習支援を行います。テクノロジーを活用した学習補助や、
                一人一人のペースに合わせた指導により、すべての人が安心して
                学べる場を目指しています。
              </p>
              <p>
                多様性を認め合い、互いの違いから学び合える。
                そんなインクルーシブな学びの場を、共に創っていきましょう。
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}