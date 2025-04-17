"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Plane, Building2, GraduationCap, Heart } from 'lucide-react'

export function GlobalSupport() {
  const supports = [
    {
      title: "渡航支援",
      description: "国際大会や交流プログラムへの参加のための渡航費用を支援します。",
      icon: Plane,
      details: [
        "航空券の手配",
        "宿泊費の補助",
        "ビザ申請サポート",
        "海外旅行保険"
      ]
    },
    {
      title: "滞在支援",
      description: "海外での活動期間中の生活をサポートします。",
      icon: Building2,
      details: [
        "住居の手配",
        "現地生活のオリエンテーション",
        "緊急時のサポート",
        "通信環境の整備"
      ]
    },
    {
      title: "活動支援",
      description: "創作活動に必要な環境と機会を提供します。",
      icon: GraduationCap,
      details: [
        "制作費の補助",
        "機材の提供",
        "技術サポート",
        "発表機会の提供"
      ]
    },
    {
      title: "コミュニティ支援",
      description: "海外での活動を通じた交流とネットワーク作りを支援します。",
      icon: Heart,
      details: [
        "現地アーティストの紹介",
        "交流イベントの開催",
        "メンタリング",
        "情報共有プラットフォーム"
      ]
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
          <h2 className="text-3xl font-bold mb-4">サポート体制</h2>
          <p className="text-lg text-muted-foreground">
            海外での活動を総合的にバックアップ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supports.map((support, index) => (
            <motion.div
              key={support.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <support.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{support.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{support.description}</p>
                <ul className="space-y-2">
                  {support.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}