"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ToolProjects() {
  const projects = [
    {
      title: "アニメーションソフト開発プロジェクト",
      description: "より直感的で創造的な表現を可能にする、次世代の空神楽制作ソフトウェアの開発に参加しませんか？",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800",
      link: "/projects/animation-software"
    },
    {
      title: "地域の物語作成プロジェクト",
      description: "各地域の歴史や文化を、光のアートで表現する新しいプロジェクト。地域の方々と協力して物語を紡ぎます。",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      link: "/projects/local-stories"
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
          <h2 className="text-3xl font-bold mb-4">関連プロジェクト</h2>
          <p className="text-lg text-muted-foreground">
            技術と表現の可能性を広げる取り組み
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
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <Button asChild>
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