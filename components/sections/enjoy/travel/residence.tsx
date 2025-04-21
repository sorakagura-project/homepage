"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, Laptop, Palette } from 'lucide-react'
import Link from 'next/link'

export function TravelResidence() {
  const programs = [
    {
      title: "コワーキングスペース",
      description: "リモートワーカーやデジタルノマドのための作業環境。自然豊かな環境で、快適な仕事空間と色々な人、作品との温かい交流を提供します。一緒に楽しむまかないも出るかも。",
      features: [
        "高速インターネット完備",
        "ワークショップ体験",
        "食事会",
        "コミュニティイベント"
      ],
      icon: Laptop,
      image: "/images/coworking.jpeg",
      prepare: true
    },
    {
      title: "短期/長期滞在施設",
      description: "拠点に滞在しながらプロジェクトに触れるプラン。地域で穏やかな時間を過ごしながら、自分の人生に新しい刺激とエネルギーを加える時間を提供します。",
      features: [
        "家具付き個室",
        "共用キッチン・ラウンジ",
        "地域活動への参加機会",
        "文化体験プログラム"
      ],
      icon: Home,
      image: "/images/stay.jpeg",
      prepare: true
    },
    {
      title: "アート/テックインレジデンス",
      description: "アーティストやエンジニアのための滞在制作プログラム。地域の文化や環境に触れながら、空神楽プロジェクトの活動と交わり、新しい創作を生み出す機会を提供します。",
      features: [
        "最長3ヶ月の滞在制作",
        "制作スペース完備",
        "地域アーティストとの交流",
        "作品発表の機会提供"
      ],
      icon: Palette,
      image: "/images/artinresidence.jpeg",
      prepare: true
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
          <h2 className="text-3xl font-bold mb-4">滞在プログラム</h2>
          <p className="text-lg text-muted-foreground">
            穏やかで創造的な活動を支える<br className="block sm:hidden" />多様な滞在オプション
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <program.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {program.prepare ? (
                    <Button disabled className="mt-auto">
                      準備中
                    </Button>
                  ) : (
                    <Button asChild className="mt-auto">
                      <Link href="/residence/apply">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}