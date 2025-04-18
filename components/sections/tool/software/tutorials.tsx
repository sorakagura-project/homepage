"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'

export function ToolTutorials() {
  const tutorials = [
    {
      title: "Skybrush Studio 入門",
      description: "ソフトのインストールから、シンプルな光のアニメーション作成まで",
      duration: "15:00",
      embedId: "watch?v=n9Pd8fXS2j4"
    },
    {
      title: "-",
      description: "-",
      duration: "-",
      embedId: "-"
    },
    {
      title: "-",
      description: "-",
      duration: "-",
      embedId: "-"
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
          <h2 className="text-3xl font-bold mb-4">チュートリアル動画</h2>
          <p className="text-lg text-muted-foreground">
            ステップバイステップで学ぶ、創作の基礎
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/${tutorial.embedId}`}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Play className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}