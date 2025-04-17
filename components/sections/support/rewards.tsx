"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Gift, Star, Trophy } from 'lucide-react'

export function SupportRewards() {
  const rewards = [
    {
      title: "限定グッズ",
      description: "プロジェクトオリジナルのTシャツ、トートバッグなど、支援者限定のアイテムをお届けします。",
      icon: Gift,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800"
    },
    {
      title: "特別イベント",
      description: "創作過程の見学や、メンバーとの交流会など、特別な体験の機会をご提供します。",
      icon: Star,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800"
    },
    {
      title: "名誉ある認定",
      description: "支援者として、プロジェクトのウェブサイトやクレジットに、お名前を掲載させていただきます。",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1589486187350-06b0c1b3ba3e?q=80&w=800"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">支援特典</h2>
          <p className="text-lg text-muted-foreground">
            支援者の皆様への感謝を込めて
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <reward.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
                  <p className="text-muted-foreground">{reward.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}