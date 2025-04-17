"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket, Users, Brain, PenTool as Tool, Palette, Code, Lightbulb, Sparkles } from 'lucide-react'
import Link from 'next/link'

// タグの種類に応じた色を定義
const getTagColor = (tag: string) => {
  // 芸術関連のタグ
  if (tag.match(/#(アート|光のアート|空間演出|没入体験|マルチメディア|自然調和メディア|レゾナント・メディア|ハーモナイズドマルチメディア|祝祭衣装|空間演出|祈りの表現|魂の共有|アニメート|ロボットデザイン|群れの表現|神話|デザインソフト設計|神楽)/)) {
    return "text-deepRed hover:text-deepRed/80"
  }
  // 人文学関連のタグ
  if (tag.match(/#(地域文化|伝統と革新|コミュニティ|ストーリーテリング|新しい価値交換|食の祭典|テクノ・アニミズム|テクノダイバーシティー|技術・自然の共生|ファイナンス|plurality|異文化対話)/)) {
    return "text-gold hover:text-gold/80"
  }
  // テクノロジー関連のタグ
  if (tag.match(/#(群制御|UI\/UX|Web3|クリエイティブツール|3Dモデリング|インタラクション|制御システム|ハードウェア|AI|機械学習|最適化|省電力化|軽量化|空力設計|ドローン開発|ローコストドローン|マルチユースドローン|心の創発エンジニアリング|デジタルファブリケーション|ヒューマン・ロボット・インタラクション|インクルーシブ・デザイン|HCI|福祉工学|DAO)/)) {
    return "text-youngGrass hover:text-youngGrass/80"
  }
  // 自然科学関連のタグ
  if (tag.match(/#(群知能|バイオミミクリー|アルゴリズム|パターン|自然模倣)/)) {
    return "text-indigo hover:text-indigo/80"
  }
  // その他のタグ
  return "text-muted-foreground hover:text-muted-foreground/80"
}

export function CreateProjects() {
  const projects = [
    {
      id: "festival",
      title: "空神楽のお祭り化PJ",
      description: "食、音楽、服飾、アートなどそれぞれの人が技を持ち寄り、みなが楽しめる非日常空間を生み出します。",
      icon: Rocket,
      image: "/images/future_festival.jpg",
      status: "計画段階",
      members: "1名参加中",
      tags: ["#食の祭典", "#祝祭衣装", "#空間演出", "#自然調和メディア", "#レゾナント・メディア", "#ハーモナイズドマルチメディア"]
    },
    {
      id: "local-stories",
      title: "地域で交わるわたしたちの神話再編PJ",
      description: "各地域の風土歴史を現代を生きる私たちの立場から空神楽で表現。何を感じ、何を願い、どんな生き方を創造するかを、多様な存在が交錯しながら編み直します。",
      icon: Sparkles,
      image: "/images/orochi.jpg",
      status: "計画段階",
      members: "1名参加中",
      tags: ["#地域文化", "#ストーリーテリング", "#神話", "#技術・自然の共生", "#祈りの表現", "#テクノ・アニミズム", "#テクノダイバーシティー"]
    },
    {
      id: "spectacle",
      title: "空神楽スペクタクル化PJ",
      description: "より多くのドローンを集めることにより、より大規模で感動的な演出を目指します。私たちの生活に想像上の生き物、伝説の生き物を現してみませんか？",
      icon: Rocket,
      image: "/images/spectacle-creature.jpg",
      status: "進行中",
      members: "1名参加中 | 現在の空神楽の規模：48台",
      tags: ["#ドローン開発", "#ローコストドローン", "#マルチユースドローン", "#ファイナンス"]
    },
    {
      id: "drone-animate",
      title: "ドローンに魂を吹き込むPJ",
      description: "心を感じるドローン、私たちと同じ世界を生きていると感じるドローンの開発に挑みます。ドローンは、機械は、ただの仕事道具、戦争道具としてしか存在しないのでしょうか。",
      icon: Tool,
      image: "/images/animated-drone.jpg",
      status: "進行中",
      members: "1名参加中",
      tags: ["#魂の共有", "#アニメート", "#ロボットデザイン", "#心の創発エンジニアリング", "#デジタルファブリケーション"]
    },
    {
      id: "orchestration",
      title: "ドローンは神楽を舞えるかPJ",
      description: "踊るのではなく舞えるかどうかが重要と言われる伝統芸能「神楽」。テクノロジーの発展によりその自律性を高めるドローンは舞えるのか。群知能、群制御技術や、人と群ロボットのインタラクションシステムを文化的知見と共に探求します。",
      icon: Code,
      image: "/images/iwamikagura.webp",
      status: "進行中",
      members: "1名参加中",
      tags: ["#神楽", "#群知能", "#ヒューマン・ロボット・インタラクション", "#群れの表現", "#デザインソフト設計"]
    },
    {
      id: "inclusive",
      title: "インクルーシブPJ",
      description: "空神楽が年齢、障害、人種など様々なハードルを超えて皆が楽しめるものにするために、インターフェースや参加/対話のあり方を設計します。",
      icon: Code,
      image: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "進行中",
      members: "1名参加中",
      tags: ["#インクルーシブ・デザイン", "#HCI", "#福祉工学", "#異文化対話"]
    },
    {
      id: "dao",
      title: "空神楽DAO化PJ",
      description: "ブロックチェーン技術を中心に、空神楽での人、テクノロジー、文化などの活動をどのように価値化し、どのような社会像を描くかをみなで作り考え話しながら実装します。今のテクノロジーでどこまで可能なのか、そしてどのような技術が望まれ、人はどのような価値を保守/創造すべきなのでしょうか。",
      icon: Users,
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=3193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "進行中",
      members: "1名参加中",
      tags: ["#DAO", "#新しい価値交換", "#plurality", "#Web3"]
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
          <h1 className="text-4xl font-bold mb-4">進行中のプロジェクト</h1>
          <p className="text-lg text-muted-foreground">
            興味のあるもの、気軽にぜひ参加してください！
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio*/}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <project.icon className="absolute bottom-4 right-4 h-8 w-8 text-primary drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.members}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs transition-colors cursor-default ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="mt-auto">
                    <Link href={`/projects/${project.id}`}>
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