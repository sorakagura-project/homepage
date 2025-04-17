"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageSquare, Users, Lightbulb, ArrowRight } from 'lucide-react'

export function LearnCommunity() {
  const features = [
    {
      icon: MessageSquare,
      title: "技術的な議論",
      description: "エンジニアやクリエイターとの活発な意見交換。最新の技術トレンドや課題解決のヒントを共有できます。"
    },
    {
      icon: Users,
      title: "コミュニティイベント",
      description: "オンライン勉強会や交流会を定期開催。仲間との出会いと学びの機会を提供します。"
    },
    {
      icon: Lightbulb,
      title: "プロジェクト共有",
      description: "自身の作品や実験的なプロジェクトを共有。フィードバックをもらいながら、アイデアを発展させられます。"
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
          <h2 className="text-3xl font-bold mb-4">オンラインコミュニティ</h2>
          <p className="text-lg text-muted-foreground">
            Discordで繋がる、学びと交流の場
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto text-center"
        >
          <Card className="p-8 bg-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">コミュニティに参加する</h3>
            <p className="mb-6">
              24時間365日、いつでも仲間と繋がれるDiscordコミュニティ。
              技術的な質問から雑談まで、あなたの学びをサポートします。
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discordに参加
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}