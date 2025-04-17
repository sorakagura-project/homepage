"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export function GlobalResidencies() {
  const residencies = [
    {
      title: "Berlin Media Arts Lab",
      description: "ベルリンのメディアアートセンターでの3ヶ月間のレジデンスプログラム。欧州のアーティストとの共同制作を通じて、新しい表現を探求します。",
      duration: "3ヶ月",
      location: "ベルリン, ドイツ",
      features: [
        "制作スペースの提供",
        "技術サポート",
        "展示機会",
        "現地アーティストとの交流"
      ],
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=800"
    },
    {
      title: "Silicon Valley Innovation Hub",
      description: "シリコンバレーのテクノロジー企業との共同研究プログラム。最先端の技術と芸術表現の融合を目指します。",
      duration: "6ヶ月",
      location: "サンフランシスコ, USA",
      features: [
        "研究開発環境",
        "メンタリング",
        "ネットワーキング",
        "プロトタイピング支援"
      ],
      image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">海外レジデンスプログラム</h2>
          <p className="text-lg text-muted-foreground">
            世界各地での長期滞在制作機会
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {residencies.map((residency, index) => (
            <motion.div
              key={residency.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={residency.image}
                    alt={residency.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{residency.title}</h3>
                  <p className="text-muted-foreground mb-4">{residency.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>期間: {residency.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{residency.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">提供内容:</h4>
                    <ul className="space-y-2">
                      {residency.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="mt-auto">
                    <Link href="/join">
                      応募する
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