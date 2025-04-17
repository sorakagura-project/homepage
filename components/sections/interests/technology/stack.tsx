"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TechStack() {
  const works = [
    {
      title: "桜夜空物語",
      description: "満開の桜と光のドローンが織りなす、春の夜の物語。上野の夜空に咲く、新しい桜の形を体験してください。",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800",
      link: "/stories/sakura"
    },
    {
      title: "天岩戸",
      description: "日本神話の天岩戸の物語を、現代のテクノロジーで再解釈。光の群れが描く神々の物語。",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      link: "/stories/amanoiwato"
    },
    {
      title: "風の記憶",
      description: "自然の動きをドローンの群れで表現。風と光が織りなす幻想的な風景。",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      link: "/stories/wind"
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
          <h2 className="text-3xl font-bold mb-4">作品ギャラリー</h2>
          <p className="text-lg text-muted-foreground">
            光の群れが描く、美しい物語の数々
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground mb-6">{work.description}</p>
                  <Button asChild className="mt-auto">
                    <Link href={work.link}>
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