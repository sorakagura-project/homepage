"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TechProjects() {
  const projects = [
    {
      title: "空神楽のお祭り化PJ",
      description: "食、音楽、服飾、アートなどそれぞれの人が技を持ち寄り、みなが楽しめる非日常空間を生み出します。",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
      link: "/projects/festival"
    },
    {
      title: "地域で交わるわたしたちの神話再編PJ",
      description: "各地域の風土歴史を現代を生きる私たちの立場から空神楽で表現。何を感じ、何を願い、どんな生き方を創造するかを、多様な存在が交錯しながら編み直します。",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
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
          <h2 className="text-3xl font-bold mb-4">参加できるプロジェクト</h2>
          <p className="text-lg text-muted-foreground">
            あなたの創造性を活かせる場所
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