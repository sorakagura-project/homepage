"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Eye, BookOpen, Wrench, Plane } from 'lucide-react'
import Link from 'next/link'

export function EnjoyCategories() {
  const categories = [
    {
      title: "実演鑑賞",
      subtitle: "光の物語を体験する",
      description: "夜空に描かれる幻想的な光のショーを体験。ドローンの群れが織りなす物語をご覧ください。",
      icon: Eye,
      href: "/enjoy/watch",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      color: "from-deepRed to-indigo"
    },
    {
      title: "学ぶ",
      subtitle: "知識と技術を習得する",
      description: "ドローン操縦やプログラミングを学び、新しい表現技術の担い手となりましょう。",
      icon: BookOpen,
      href: "/enjoy/learn",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      color: "from-indigo to-gold"
    },
    {
      title: "作る",
      subtitle: "創造の喜びを分かち合う",
      description: "あなたのアイデアを光の物語に。プロジェクトに参加して、新しい表現を創造しましょう。",
      icon: Wrench,
      href: "/enjoy/create",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
      color: "from-gold to-youngGrass"
    },
    {
      title: "旅をする",
      subtitle: "各地の文化と出会う",
      description: "日本各地で開催される公演を巡り、地域の文化や歴史と光の物語が交差する瞬間を体験。",
      icon: Plane,
      href: "/enjoy/travel",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      color: "from-youngGrass to-deepRed"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30`} />
                  <category.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-primary mb-4">{category.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <Button asChild>
                    <Link href={category.href}>
                      詳しく見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}