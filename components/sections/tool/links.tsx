"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Wrench } from 'lucide-react'
import Link from 'next/link'

export function ToolLinks() {
  const sections = [
    {
      title: "ソフトウェア",
      description: "空神楽の制作に必要なソフトウェアツールと、その使い方を紹介します。3Dアニメーション制作から群制御まで、必要な技術を学べます。",
      icon: Code,
      image: "/images/skybrush-blender.jpg",
      href: "/tool/software"
    },
    {
      title: "ハードウェア",
      description: "空神楽を彩るドローンやその他ハードウェアについての情報を紹介します。空神楽プロジェクトが描く未来像にハードウェアがどのように関わり、そこに自分がどう関われるのかを知ることができます。",
      icon: Wrench,
      image: "/images/animated-drone.jpg",
      href: "/tool/hardware"
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
          <h2 className="text-3xl font-bold mb-4">使用するテクノロジー</h2>
          <p className="text-lg text-muted-foreground">
            空神楽の制作に必要な技術情報
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <section.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <Button asChild className="mt-auto">
                    <Link href={section.href}>
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