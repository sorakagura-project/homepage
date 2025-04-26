"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function SchoolPlans() {
  const plans = [
    {
      name: "小学生プラン",
      price: "月額 15,000円",
      features: [
        "分野毎、ステージ毎のプログラムの選択",
        "生成AIを使った学び方の学習-学校教育への応用含む",
        "空神楽の制作を通じた社会参加",
        "保護者面談（年4回）"
      ]
    },
    {
      name: "中高生/大学生プラン",
      price: "月額 20,000円",
      features: [
        "分野毎、ステージ毎のプログラムの選択",
        "生成AIを使った学び方の学習-学校教育への応用含む",
        "興味ある分野のフロンティアの探求",
        "空神楽などの制作を通じた社会参加"
      ]
    },
    {
      name: "大人プラン",
      price: "月額 30,000円",
      features: [
        "世界に根差した学び直し",
        "最先端のテクノロジーの習得",
        "創作活動の場の提供",
        "多様な人との出会い"
      ]
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
          <h2 className="text-3xl font-bold mb-6">入塾プラン</h2>
          <p className="text-lg text-muted-foreground">
            年齢や目的に合わせて選べる学習プラン
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-xl text-primary font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button disabled className="w-full mt-auto">
                  準備中
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}