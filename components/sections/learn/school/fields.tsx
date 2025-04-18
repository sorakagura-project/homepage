"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { FlaskRound as Flask, Palette, Cpu, Heart } from 'lucide-react'

export function SchoolFields() {
  const fields = [
    {
      name: "科学",
      description: "自然界の法則と現象の探求",
      icon: Flask,
      topics: [
        "物理学",
        "生物学",
        "数理的思考",
        "情報数理"
      ],
      color: "from-deepRed to-gold"
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
      color: "from-gold to-youngGrass"
    },
    {
      name: "テクノロジー",
      description: "技術と創造の探求",
      icon: Cpu,
      topics: [
        "AI",
        "ロボット/電子工作",
        "アルゴリズム/ブロックチェーン",
        "AR/MR"
      ],
      color: "from-youngGrass to-indigo"
    },
    {
      name: "生き方",
      description: "人生と社会の探求",
      icon: Heart,
      topics: [
        "哲学と美学",
        "共生とコミュニケーション",
        "物語思考",
        "仏教"
      ],
      color: "from-indigo to-deepRed"
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">4つの探求分野</h2>
          <p className="text-lg text-muted-foreground">
            科学・芸術・技術・生き方、<br className="block sm:hidden" />4つの視点から世界を探求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${field.color} flex items-center justify-center mb-6`}>
                  <field.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{field.name}</h3>
                <p className="text-muted-foreground mb-6">{field.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">学習トピック</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {field.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}