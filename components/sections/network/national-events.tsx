"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export function NationalEvents() {
  const events = [
    {
      title: "空神楽全国大会2024",
      description: "全国各地の空神楽プロジェクトが一堂に会し、それぞれの地域性を活かした表現を披露。技術と文化の交流の場として、新たな可能性を探ります。",
      date: "2024年11月23日-24日",
      location: "南相馬市",
      features: [
        "各地域の実演発表",
        "技術交流会",
        "ワークショップ",
        "パネルディスカッション"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
    },
    {
      title: "空神楽フェスティバル2025",
      description: "春の訪れを祝う全国規模のフェスティバル。伝統的な春祭りと現代テクノロジーの融合を、各地域の特色とともに展開します。",
      date: "2025年3月21日-23日",
      location: "上野恩賜公園",
      features: [
        "夜間パフォーマンス",
        "アート展示",
        "食文化の出展",
        "子ども向けワークショップ"
      ],
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">全国規模イベント</h2>
          <p className="text-lg text-muted-foreground">
            日本全国の空神楽が集う、祝祭の場
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
                      <h4 className="font-semibold mb-2">主なプログラム:</h4>
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
                      <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        詳しく見る
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