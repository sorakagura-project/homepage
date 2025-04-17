"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function RegionalExchange() {
  const exchanges = [
    {
      title: "南相馬×横瀬町 文化交流プログラム",
      description: "馬とロボットの街・南相馬と、山と創造の街・横瀬町が、それぞれの文化資源を活かした新しい表現を共同で創造します。",
      date: "2024年6月〜",
      activities: [
        "アーティスト交換プログラム",
        "合同ワークショップの開催",
        "両地域での実演イベント",
        "オンライン交流会"
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
    },
    {
      title: "東北・関東 若手クリエイター育成プロジェクト",
      description: "地域の若手クリエイターが集まり、互いの文化や技術を学び合いながら、新しい表現を生み出すプロジェクト。",
      date: "2024年9月〜",
      activities: [
        "メンタリングプログラム",
        "技術交流会",
        "共同制作プロジェクト",
        "成果発表会"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">地域間交流プログラム</h2>
          <p className="text-lg text-muted-foreground">
            地域の個性を活かしながら、共に創造する
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exchanges.map((exchange, index) => (
            <motion.div
              key={exchange.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={exchange.image}
                    alt={exchange.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exchange.title}</h3>
                  <p className="text-muted-foreground mb-4">{exchange.description}</p>
                  <p className="text-sm text-primary mb-4">{exchange.date}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">主な活動内容:</h4>
                    <ul className="space-y-2">
                      {exchange.activities.map((activity, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild>
                    <Link href="/join">
                      参加する
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}