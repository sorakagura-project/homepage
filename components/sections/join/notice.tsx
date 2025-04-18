"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Info } from 'lucide-react'

export function JoinNotice() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-muted/50">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  プロジェクトの段階と<br className="block sm:hidden" />関わり方について
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    空神楽プロジェクトは現在、発展途上の段階にあります。
                    そのため現時点では、定常的な労働や給与が発生する形での参加ではなく、
                    副業的な関わり方をお願いしています。参加する人にとって、経済的な基盤をもちながら、楽しく大切なことを続けていけるのがベターと考えています。
                  </p>
                  <p>
                    私たちは、このプロジェクトを通じて新しい文化体験の創造と、
                    それを持続可能な形で社会に定着させることを目指しています。
                    その過程で、参加するメンバーの方々にも適切な対価が還元される
                    仕組みを一緒に作ること、参加してくれる方からさらなるアイデアが出れば一緒にトライしながら様々な発展を生むことができたらと考えています。
                  </p>
                  <p>
                    あなたのスキルや経験を活かしながら、
                    共に未来を創造するパートナーとして、
                    このチャレンジに参加していただけることを願っています。
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}