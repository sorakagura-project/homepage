"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Users, Palette, Cpu, BookOpen } from 'lucide-react'

export function SchoolConcept() {
  const concepts = [
    {
      title: "自分の情熱、美の発見",
      description: "何かに出逢った時の自分の体が震えるワクワク、体を超える感動を、人とロボットと芸術と一緒に世界の中に見つけに行こう。",
      icon: Users,
      color: "from-deepRed to-gold"
    },
    {
      title: "年齢、分野を超えた学び",
      description: "小学生〜大学生〜大人まで、技術好き、芸術好き、科学好きまで知識・スキル関係なく、創造愛、知識愛、世界愛をもって世代/分野を超えて学び合い、創造する場です。",
      icon: Palette,
      color: "from-gold to-youngGrass"
    },
    {
      title: "協働した制作と地域、世界への参加",
      description: "空神楽の創作を中心に、皆で創作を重ね合わせ地域、社会、文化づくりに参加します。自分の創作が他人や社会と結びつき、意味がどのように生まれるかを体感します。将来的には海外での芸術交流も行います。",
      icon: Cpu,
      color: "from-youngGrass to-indigo"
    },
    {
      title: "フロンティアの開拓",
      description: "生命、宇宙、量子、計算。それぞれが志す美しいフロンティアに向かって最先端の科学とテクノロジーを学び模索します。",
      icon: BookOpen,
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
          <h2 className="text-3xl font-bold mb-6">神楽塾のコンセプト</h2>
          <p className="text-lg text-muted-foreground">
            ポストAI時代の、美と創造に向けた学び
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${concept.color} flex items-center justify-center mb-6`}>
                  <concept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{concept.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}