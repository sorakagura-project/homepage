"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Music, Wrench, Box } from 'lucide-react'

export function HardwareExpansion() {
  const expansions = [
    {
      title: "太鼓",
      description: "空神楽の演舞に合わせて、自動で演奏する電子太鼓システム。伝統的な和太鼓の音色と現代のテクノロジーを融合させ、より豊かな表現を可能にします。",
      icon: Music,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800"
    },
    {
      title: "マルチユースドローン",
      description: "空神楽での演舞だけでなく、日常的な用途でも活用できる多目的ドローン。農業、測量、撮影など、様々な場面で活躍できる機能を備えています。",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800"
    },
    {
      title: "インスタレーション",
      description: "空間全体を使った体験型のインスタレーション。ドローンの動きと連動した光や音、プロジェクションマッピングなどを組み合わせ、没入感のある体験を創出します。",
      icon: Box,
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800"
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">ハードウェアの展開</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expansions.map((expansion, index) => (
              <motion.div
                key={expansion.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <img
                      src={expansion.image}
                      alt={expansion.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <expansion.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{expansion.title}</h3>
                    <p className="text-muted-foreground">{expansion.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}