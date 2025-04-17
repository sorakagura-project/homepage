"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function GlobalExchanges() {
  const programs = [
    {
      title: "欧州メディアアート交流プログラム",
      description: "ZKMやArs Electronicaなど、欧州の主要メディアアート機関との交流プログラム。最新のテクノロジーアートの潮流を学び、共同制作を行います。",
      duration: "3ヶ月",
      features: [
        "アーティストレジデンス",
        "共同制作プロジェクト",
        "展示機会の提供",
        "技術ワークショップ"
      ],
      image: "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=800"
    },
    {
      title: "アジアドローンアート連携",
      description: "アジア各国のドローンアートプロジェクトとの技術・文化交流。各地の伝統文化とテクノロジーの融合事例を学び、新しい表現を探求します。",
      duration: "1-2週間",
      features: [
        "技術交流会",
        "文化体験プログラム",
        "合同パフォーマンス",
        "若手育成支援"
      ],
      image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=800"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">国際交流プログラム</h2>
          <p className="text-lg text-muted-foreground">
            世界各地のアーティスト・技術者との交流機会
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <p className="text-sm text-primary mb-4">期間: {program.duration}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">プログラム内容:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="mt-auto">
                    <Link href="/join">
                      詳しく見る
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