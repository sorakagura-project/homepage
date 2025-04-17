"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function NetworkProjects() {
  const projects = [
    {
      title: "地域の物語作成プロジェクト",
      description: "各地域の歴史や文化を光のアートで表現する新しいプロジェクト。地域の方々と協力して、その土地ならではの物語を紡ぎ出します。",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
      link: "/projects/local-stories"
    },
    {
      title: "空神楽DAO化プロジェクト",
      description: "地域間の価値交換の新しい形を模索。ブロックチェーン技術を活用し、持続可能な文化創造のエコシステムを構築します。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      link: "/projects/dao"
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
          <h2 className="text-3xl font-bold mb-4">地域連携プロジェクト</h2>
          <p className="text-lg text-muted-foreground">
            地域をつなぎ、新しい価値を生み出す
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <Button asChild className="mt-auto">
                    <Link href={project.link}>
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