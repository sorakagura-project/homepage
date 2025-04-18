"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { School, Wrench, Sparkles, Rocket } from 'lucide-react'

export function SchoolStages() {
  const stages = [
    {
      name: "楽しさを感じたい",
      description: "世界の面白さを体で感じる",
      features: [
        "心を動かす楽しさの体験",
        "自分のモチベーションの発見",
        "勉強の目的の理解",
        "世界の奥深さを知る"
      ],
      icon: School,
      color: "from-deepRed to-gold"
    },
    {
      name: "基本技術を身につけたい",
      description: "基本的な知識/技術の習得",
      features: [
        "分野の基本知識の習得",
        "問題解決能力",
        "実践的な技術鍛錬",
        "生成AIとの学び方の学習"
      ],
      icon: Wrench,
      color: "from-gold to-youngGrass"
    },
    {
      name: "創造してみたい",
      description: "独自の表現と作品制作",
      features: [
        "自分らしさの探求",
        "創作の構想プロセスの学習",
        "実践的な創作知の体得",
        "成果の発表を通じた他者との関係理解"
      ],
      icon: Sparkles,
      color: "from-youngGrass to-indigo"
    },
    {
      name: "社会に向けて創造したい",
      description: "社会実装と価値創造",
      features: [
        "社会の文脈の理解",
        "自分の興味と社会の接続",
        "自分らしい社会的価値の創出",
        "未来へのフロンティアの挑戦"
      ],
      icon: Rocket,
      color: "from-indigo to-deepRed"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">4つの学びのステージ</h2>
          <p className="text-lg text-muted-foreground">
            目的に合わせて選べる、<br className="block sm:hidden" />段階的な学習プロセス
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-6`}>
                  <stage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{stage.name}</h3>
                <p className="text-muted-foreground mb-6">{stage.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">習得目標</h4>
                  <ul className="space-y-2">
                    {stage.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
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