"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Trophy, Users } from 'lucide-react'
import Link from 'next/link'

export function GlobalChallenge() {
  const challenges = [
    {
      title: "国際大会への挑戦",
      description: "International Drone Show Competitionなどの、世界規模のイベントに参加し、空神楽の表現を世界に発信します。",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800"
    },
    {
      title: "国際交流プログラム",
      description: "欧州のメディアアート機関やアジアのドローンアートプロジェクトとの技術・文化交流を通じて、新しい表現の可能性を探求します。",
      icon: Users,
      image: "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=800"
    },
    {
      title: "海外レジデンス",
      description: "ベルリンやシリコンバレーなど、世界各地での長期滞在制作プログラムに参加。現地のアーティストや技術者との共同制作を通じて視野を広げます。",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">海外への挑戦</h2>
          <p className="text-lg text-muted-foreground">
            世界とつながり、新しい可能性を探求する
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <challenge.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button disabled size="lg">
            <Link href="/global">
              今後展開予定
              
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}