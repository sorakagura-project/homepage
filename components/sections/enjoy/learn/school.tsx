"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react';
import { ArrowRight, FlaskRound as Flask, Palette, Cpu, Heart, School, Wrench, Sparkles, Rocket } from 'lucide-react'
import Link from 'next/link'

export function LearnSchool() {
  const fields = [
    {
      name: "科学",
      description: "自然界の法則/現象の探求",
      icon: Flask,
      topics: ["物理学", "生物学", "数学", "情報科学"],
      color: "from-indigo to-deepRed"
    },
    {
      name: "美術",
      description: "感性と表現の探求",
      icon: Palette,
      topics: [
        "造形と色彩",
        "デジタルアート",
        "メディア表現",
        "空間デザイン"
      ],
      color: "from-deepRed to-gold"
    },
    {
      name: "テクノロジー",
      description: "技術と創造の探求",
      icon: Cpu,
      topics: [
        "プログラミング",
        "電子工作",
        "ドローン工学",
        "AI活用"
      ],
      color: "from-gold to-youngGrass"
    },
    {
      name: "生き方",
      description: "人生と社会の探求",
      icon: Heart,
      topics: [
        "哲学と倫理",
        "コミュニケーション",
        "リーダーシップ",
        "プロジェクト実践"
      ],
      color: "from-youngGrass to-indigo"
    }
  ]

  const stages = [
    {
      name: "楽しさを感じたい",
      description: "世界の面白さの体感",
      icon: School,
      color: "from-deepRed to-gold"
    },
    {
      name: "基礎技術を身につけたい",
      description: "基礎知識と技術の習得",
      icon: Wrench,
      color: "from-gold to-youngGrass"
    },
    {
      name: "創造してみたい",
      description: "独自の表現と作品制作",
      icon: Sparkles,
      color: "from-youngGrass to-indigo"
    },
    {
      name: "社会に向けて創造したい",
      description: "社会実装と価値創造",
      icon: Rocket,
      color: "from-indigo to-deepRed"
    }
  ]

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 初回設定＋リスナー追加
    handleResize();
    window.addEventListener('resize', handleResize);

    // コンポーネントが壊れたらリスナーを外す
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="school" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">神楽塾</h2>
          <p className="text-lg text-muted-foreground">
            AI時代に自分と世界の幸せを<br className="block sm:hidden" />描ける力の習得
          </p>
          <p className="text-lg text-muted-foreground">
            自分と世界、未来を結びつける、<br className="block sm:hidden" />分野を超えた美の探求
          </p>
          <p className="text-lg text-muted-foreground">
            自分の興味・自分のステージに<br className="block sm:hidden" />合わせた学びを選択できます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-12">
          {/* Fields Circle */}
          <div className="relative aspect-square">
            <h3 className="text-2xl font-bold text-center mb-8">4つの探求分野</h3>
            {fields.map((field, index) => {
              const angle = (index * Math.PI * 2) / 4 + Math.PI * 3 / 2 // Start from top
              const radius = windowWidth < 768 ? 100 : 145; // Consistent radius for both circles
              const centerOffset = windowWidth < 768 ? -37.5 : -65;
              const x = Math.cos(angle) * radius + centerOffset // Same offset as fields circle
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="group relative">
                    <div className={`w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r ${field.color} shadow-lg flex items-center justify-center hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}>
                      <field.icon className="h-10 w-10 md:h-16 md:w-16 text-white transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-card p-4 rounded-lg shadow-lg -translate-y-full -translate-x-1/2 left-1/2 mb-2 w-48 pointer-events-none text-center transform group-hover:-translate-y-[calc(100%+1rem)]">
                      <h4 className="font-bold mb-1 overflow-hidden text-ellipsis whitespace-nowrap">{field.name}</h4>
                      <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">{field.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stages Circle */}
          <div className="relative aspect-square">
            <h3 className="text-2xl font-bold text-center mb-8">4つの学びのステージ</h3>
            {stages.map((stage, index) => {
              const angle = (index * Math.PI * 2) / 4 + Math.PI * 3 / 2 // Start from top
              const radius = windowWidth < 768 ? 100 : 145; // Same radius as fields circle
              const centerOffset = windowWidth < 768 ? -37.5 : -65;
              const x = Math.cos(angle) * radius + centerOffset // Same offset as fields circle
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="group relative">
                    <div className={`w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r ${stage.color} shadow-lg flex items-center justify-center hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}>
                      <stage.icon className="h-10 w-10 md:h-16 md:w-16 text-white transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-card p-4 rounded-lg shadow-lg -translate-y-full -translate-x-1/2 left-1/2 mb-2 w-48 pointer-events-none text-center transform group-hover:-translate-y-[calc(100%+1rem)]">
                      <h4 className="font-bold mb-1 overflow-hidden text-ellipsis whitespace-nowrap">{stage.name}</h4>
                      <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">{stage.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/learn/school">
              詳細を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}