"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Trophy, Calendar, MapPin } from 'lucide-react'

export function GlobalCompetitions() {
  const competitions = [
    {
      title: "World Drone Art Championship",
      description: "世界最大規模のドローンアート競技大会。技術と芸術性を競い合い、各国の文化や表現を共有します。",
      date: "2025年5月",
      location: "パリ, フランス",
      categories: [
        "集団飛行芸術部門",
        "テクニカル部門",
        "文化表現部門",
        "イノベーション部門"
      ],
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800"
    },
    {
      title: "International Light Art Festival",
      description: "光のアートに特化した国際フェスティバル。ドローンによる新しい表現の可能性を世界に発信します。",
      date: "2025年9月",
      location: "ベルリン, ドイツ",
      categories: [
        "空間演出部門",
        "インタラクティブ部門",
        "伝統×革新部門",
        "環境共生部門"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">国際大会・コンペティション</h2>
          <p className="text-lg text-muted-foreground">
            世界の舞台で競い合い、高め合う
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{competition.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{competition.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{competition.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{competition.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">競技カテゴリー:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {competition.categories.map((category, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {category}
                        </li>
                      ))}
                    </ul>
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