"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users, Target } from 'lucide-react'

export function WatchWorkshops() {
  const workshop = {
    title: "空神楽の制作から実演鑑賞まで一気に体験WS",
    icon: Target,
    purpose: "表現の基礎を学び、皆で集って大迫力の空神楽を体験",
    content: [
      "空神楽の説明、制作準備（30分）",
      "アニメーション制作体験（2時間）",
      "実演準備（1時間）",
      "実演鑑賞（30分）"
    ],
    skills: [
      "3Dモデリングの基礎",
      "アート思考の基礎",
      "物語のデザイン",
      "ドローンの群飛行体験"
    ],
    fields: {
      technology: true,
      art: true,
      science: false,
      life: false
    },
    level: {
      beginner: true,
      intermediate: true,
      advanced: false
    },
    date: "近日開催",
    location: "未定",
    capacity: "30名",
    price: "3,000円",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800"
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">実演ワークショップ</h2>
          <p className="text-lg text-muted-foreground">
            制作から実演まで、空神楽の全てを体験
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
                <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-muted-foreground mb-4">{workshop.purpose}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-1">内容</h4>
                  <ul className="space-y-1">
                    {workshop.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-1">身につく技能・知識</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {workshop.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-1">学習分野</h4>
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

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-1">対象レベル</h4>
                  <div className="flex gap-2">
                    <span className={`text-sm px-2 py-1 rounded-full ${workshop.level.beginner ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      初心者
                    </span>
                    <span className={`text-sm px-2 py-1 rounded-full ${workshop.level.intermediate ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      中級者
                    </span>
                    <span className={`text-sm px-2 py-1 rounded-full ${workshop.level.advanced ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      上級者
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>定員 {workshop.capacity}</span>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary mb-4">{workshop.price}</p>
                <Button>
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}