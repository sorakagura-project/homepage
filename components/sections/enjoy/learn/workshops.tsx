"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users, Target, BookOpen, Heart, FlaskRound as Flask, Palette, Cpu } from 'lucide-react'
import Link from 'next/link'

export function LearnWorkshops() {
  const workshops = [
    {
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
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000"
    },
    {
      title: "生成AIを用いたソフトウェア制作WS",
      icon: BookOpen,
      purpose: "空神楽を構成するソフトウェアを題材に生成AIを用いたソフトウェアの作り方を学ぶ",
      content: [
        "生成AI時代の人の役割（30分）",
        "生成AI駆動ソフトウェア開発の基礎（1時間）",
        "生成AI駆動ソフトウェア開発の実践（2時間）",
        "学びや制作に関する知見の共有（1時間）"
      ],
      skills: [
        "生成AI時代のヒューマンスキル",
        "AIプロンプトエンジニアリング", 
        "ソフトウェアエンジニアリング"
      ],
      fields: {
        technology: true,
        art: false,
        science: false,
        life: false
      },
      level: {
        beginner: false,
        intermediate: true,
        advanced: false
      },
      date: "未定",
      location: "未定",
      capacity: "20名",
      price: "5,000円",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800"
    },
    {
      title: "地域と空神楽の関わりから学ぶ意味と関係の構築WS",
      icon: Heart,
      purpose: "空神楽の鑑賞と対話を通じて、自分の内側と外側への想像を広げ、つながりを結び直す",
      content: [
        "空神楽の実演鑑賞（1時間）",
        "聴くことの実践（30分）",
        "対話の実践（1時間）",
        "ふり返りと創造の種まき（30分）"
      ],
      skills: [
        "聴くこと",
        "コミュニケーション",
        "関係の結び直し",
        "意味の感得"
      ],
      fields: {
        technology: false,
        art: true,
        science: false,
        life: true
      },
      level: {
        beginner: true,
        intermediate: true,
        advanced: true
      },
      date: "未定",
      location: "未定",
      capacity: "20名",
      price: "1,500円",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <h1 className="text-4xl font-bold mb-4">ワークショップ</h1>
          <p className="text-lg text-muted-foreground">
            世界の広がり、美しさに触れる楽しさを体感する
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
          ))}
        </div>
      </div>

      <div className="container mt-12 text-center">
        <Button variant="outline" asChild>
          <Link href="/enjoy/learn/workshops/history">
            これまでのワークショップ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}