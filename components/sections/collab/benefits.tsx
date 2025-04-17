"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Target, Users, Sparkles, Globe } from 'lucide-react'

export function CollabBenefits() {
  const benefits = [
    {
      title: "ブランド価値の向上",
      description: "革新的な文化プロジェクトへの参画を通じて、先進的で文化的な企業・団体としてのブランドイメージを確立できます。",
      icon: Target
    },
    {
      title: "地域活性化",
      description: "新しい観光資源の創出や文化体験の提供により、地域の魅力向上と経済活性化に貢献します。",
      icon: Users
    },
    {
      title: "技術革新",
      description: "最新のテクノロジーと伝統文化の融合により、新しい表現手法や活用方法を開発できます。",
      icon: Sparkles
    },
    {
      title: "グローバル発信",
      description: "日本の文化を革新的な形で世界に発信し、国際的な注目を集めることができます。",
      icon: Globe
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
          <h2 className="text-3xl font-bold mb-4">パートナーシップのメリット</h2>
          <p className="text-lg text-muted-foreground">
            協力を通じて得られる価値
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}