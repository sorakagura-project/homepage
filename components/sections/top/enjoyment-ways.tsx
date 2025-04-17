"use client"

import { motion } from 'framer-motion'
import { Eye, BookOpen, Wrench, Plane } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function EnjoymentWays() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          4つの楽しみ方
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "実演鑑賞",
              description: "夜空に浮かぶ光の物語を体験",
              icon: Eye,
              href: "/enjoy/watch",
              color: "text-deepRed"
            },
            {
              title: "学ぶ",
              description: "楽しさに溢れた学びの場で未来を生きる力を身につける。",
              icon: BookOpen,
              href: "/enjoy/learn",
              color: "text-indigo"
            },
            {
              title: "作る",
              description: "様々な興味、創造が錯綜する本気の遊び場。",
              icon: Wrench,
              href: "/enjoy/create",
              color: "text-gold"
            },
            {
              title: "旅をする",
              description: "人、自然、文化との新たな出会いが生活に息吹を吹き込む。",
              icon: Plane,
              href: "/enjoy/travel",
              color: "text-youngGrass"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
                <feature.icon className={`h-12 w-12 mb-4 ${feature.color} drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="ghost" asChild className="group-hover:shadow-md group-hover:shadow-foreground/10 transition-shadow">
                  <Link href={feature.href}>
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}