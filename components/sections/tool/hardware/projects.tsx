"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HardwareProjects() {
  const projects = [
    {
      title: "空神楽スペクタクル化PJ",
      description: "より多くのドローンを集めることにより、より大規模で感動的な演出を目指します。私たちの生活に想像上の生き物、伝説の生き物を現してみませんか？",
      image: "/images/spectacle-creature.jpeg",
      href: "/projects/spectacle"
    },
    {
      title: "ドローンに魂を吹き込むPJ",
      description: "心を感じるドローン、私たちと同じ世界を生きていると感じるドローンの開発に挑みます。ドローンは、機械は、ただの仕事道具、戦争道具としてしか存在しないのでしょうか。",
      image: "/images/animated-drone.jpg",
      href: "/projects/drone-animate"
    },
    {
      title: "ドローンは神楽を舞えるかPJ",
      description: "踊るのではなく舞えるかどうかが重要と言われる伝統芸能「神楽」。テクノロジーの発展によりその自律性を高めるドローンは舞えるのか。群知能、群制御技術や、人と群ロボットのインタラクションシステムを文化的知見と共に探求します。",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800",
      href: "/projects/orchestration"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">関連プロジェクト</h2>
          <p className="text-lg text-muted-foreground">
            ハードウェアに関連する進行中のプロジェクト
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <Link href={project.href}>
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