"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { FileText, MessageSquare, Users, Rocket } from 'lucide-react'

export function JoinProcess() {
  const steps = [
    {
      title: "エントリー",
      description: "参加申込フォームに必要事項を記入して送信します。",
      icon: FileText
    },
    {
      title: "カジュアル面談",
      description: "オンラインで簡単な面談を行い、お互いの期待値を確認します。",
      icon: MessageSquare
    },
    {
      title: "活動開始",
      description: "オリエンテーションを経て、プロジェクトでの活動を開始します。",
      icon: Rocket
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
          <h2 className="text-3xl font-bold mb-4">参加までの流れ</h2>
          <p className="text-lg text-muted-foreground">
            スムーズな参加のためのプロセス
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 before:content-[''] before:absolute before:left-[15px] before:top-[28px] before:bottom-[-12px] before:w-[2px] before:bg-border last:before:hidden"
            >
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <step.icon className="h-4 w-4 text-primary" />
              </div>
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}