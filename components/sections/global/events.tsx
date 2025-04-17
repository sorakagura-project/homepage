"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export function GlobalEvents() {
  const events = [
    {
      title: "Amsterdam Light Festival",
      description: "世界最大級のライトアートフェスティバルに空神楽が参加。水路と光が織りなす幻想的な空間で、日本の伝統と現代テクノロジーの融合を披露します。",
      date: "2024年12月",
      location: "アムステルダム, オランダ",
      features: [
        "運河上空でのドローンショー",
        "日蘭アーティストコラボレーション",
        "ワークショップ開催",
        "技術交流会"
      ],
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800"
    },
    {
      title: "Dubai World Drone Prix",
      description: "世界最高峰のドローン競技大会に出場。芸術性と技術力を競い合う特別部門で、空神楽独自の表現を世界に発信します。",
      date: "2025年3月",
      location: "ドバイ, UAE",
      features: [
        "アート部門での競演",
        "技術プレゼンテーション",
        "国際交流セッション",
        "若手育成プログラム"
      ],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">世界規模のイベント</h2>
          <p className="text-lg text-muted-foreground">
            国際舞台で輝く空神楽の表現
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">プログラム内容:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {event.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}