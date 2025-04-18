"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Presentation, School, Users } from 'lucide-react'
import Link from 'next/link'

export function LearnWays() {
  const ways = [
    {
      title: "ワークショップ",
      description: "1日で集中的に学ぶ。学ぶ楽しさ、新たな出会いを体で感じます。",
      features: [
        "集中的な学び",
        "楽しさ/感動の実感",
        "基礎の導入",
        "仲間との交流"
      ],
      icon: Presentation,
      color: "from-deepRed to-gold",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      href: "/enjoy/learn/workshops"
    },
    {
      title: "神楽塾",
      description: "体系的に学ぶ。4つの分野と4つのステージから、自分に合った学びを選択できます。",
      features: [
        "多様な人、知識、創作との出会い",
        "自分のレベルに応じた学習",
        "学び/創作を通じた関係構築",
        "居場所の獲得"
      ],
      icon: School,
      color: "from-gold to-youngGrass",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
      href: "/enjoy/learn/school"
    },
    {
      title: "オンラインコミュニティ",
      description: "仲間と学び合う。Discordで技術的な議論や情報共有を行います。",
      features: [
        "24時間アクセス可能",
        "技術的な質問・相談",
        "場所を超えたつながり",
        "気軽な参加"
      ],
      icon: Users,
      color: "from-youngGrass to-indigo",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      href: "/enjoy/learn/community"
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
          <h2 className="text-3xl font-bold mb-4">3つの学びの手段</h2>
          <p className="text-lg text-muted-foreground">
            あなたのスタイルに合わせて<br className="block sm:hidden" />選べる学習方法
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={way.image}
                    alt={way.title}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${way.color} opacity-30`} />
                  <way.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                  <p className="text-muted-foreground mb-4">{way.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold">特徴:</p>
                    <ul className="space-y-1">
                      {way.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="mt-auto">
                    <Link href={way.href}>
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