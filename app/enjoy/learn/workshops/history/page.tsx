"use client"

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Palette, Code, FlaskRound as Flask, Heart } from 'lucide-react'

export default function WorkshopHistoryPage() {
  const workshops = [
    {
      title: "空神楽デザイン体験WS",
      date: "2024年2月",
      location: "南相馬市小高区",
      description: "空神楽の基礎から実演までを体験する1日集中ワークショップ。3Dモデリングの基礎からドローンの群制御まで、実践的なスキルを学びました。",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800",
      fields: {
        technology: true,
        art: true,
        science: false,
        life: false
      },
      skills: [
        "3Dモデリング基礎",
        "アニメーション制作",
        "ドローン制御入門",
        "空間演出デザイン"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">これまでのワークショップ</h1>
              <p className="text-lg text-muted-foreground">
                過去に開催したワークショップの記録
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <img
                          src={workshop.image}
                          alt={workshop.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-sm text-muted-foreground">
                            {workshop.date}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {workshop.location}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                        <p className="text-muted-foreground mb-6">{workshop.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-primary mb-2">学習分野</h4>
                          <div className="flex gap-2">
                            <div className={`text-sm px-2 py-1 rounded-full ${workshop.fields.technology ? 'bg-youngGrass/10 text-youngGrass' : 'bg-muted text-muted-foreground'}`}>
                              テクノロジー
                            </div>
                            <div className={`text-sm px-2 py-1 rounded-full ${workshop.fields.art ? 'bg-deepRed/10 text-deepRed' : 'bg-muted text-muted-foreground'}`}>
                              美術
                            </div>
                            <div className={`text-sm px-2 py-1 rounded-full ${workshop.fields.science ? 'bg-indigo/10 text-indigo' : 'bg-muted text-muted-foreground'}`}>
                              科学
                            </div>
                            <div className={`text-sm px-2 py-1 rounded-full ${workshop.fields.life ? 'bg-gold/10 text-gold' : 'bg-muted text-muted-foreground'}`}>
                              生き方
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">身についた技能・知識</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {workshop.skills.map((skill, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}