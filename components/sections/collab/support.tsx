"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AlertTriangle, HeartHandshake } from 'lucide-react'

export function CollabSupport() {
  const challenges = [
    {
      title: "技術開発の課題",
      points: [
        "より多くのドローンの調達と維持",
        "安全性と信頼性の向上",
        "バッテリー効率の改善",
        "環境への配慮"
      ]
    },
    {
      title: "運営面の課題",
      points: [
        "活動拠点の確保と整備",
        "人材育成と技術継承",
        "地域との関係構築",
        "持続可能な運営モデルの確立"
      ]
    },
    {
      title: "文化創造の課題",
      points: [
        "伝統と革新のバランス",
        "新しい表現方法の開発",
        "多様な価値観の調和",
        "次世代への継承"
      ]
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">現在直面している課題</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={challenge.title}>
                  <h3 className="font-semibold mb-4">{challenge.title}</h3>
                  <ul className="space-y-2">
                    {challenge.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="flex items-center gap-4 mb-6">
              <HeartHandshake className="h-8 w-8" />
              <h2 className="text-2xl font-bold">支援・協力のお願い</h2>
            </div>
            <div className="space-y-4">
              <p>
                これらの課題を乗り越え、より豊かな文化創造を実現するために、
                皆様のご支援・ご協力を必要としています。
              </p>
              <p>
                技術、資金、場所、人材など、様々な形でのサポートを歓迎いたします。
                私たちと共に、新しい文化の創造に携わっていただける方々との出会いを
                心待ちにしています。
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}