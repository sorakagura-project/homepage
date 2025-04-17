"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Download, Palette, Send, Users } from 'lucide-react'

export function ToolProcess() {
  const steps = [
    {
      icon: Download,
      title: "ソフトウェアのダウンロード",
      description: "必要なソフトウェア（無料）を自分のPCにインストールして、創作の準備を整えます。",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
    },
    {
      icon: Palette,
      title: "3Dモデリングとアニメーション",
      description: "専用ソフトで光の動きをデザインし、美しい模様や物語を創造します。",
      image: "/images/skybrush-blender.png"
    },
    {
      icon: Send,
      title: "ドローンの配列とアニメーションデータの転送",
      description: "ドローンを地上に並べて、作成したアニメーションデータをドローン群に転送します。",
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800"
    },
    {
      icon: Users,
      title: "ドローンの飛行、みなで鑑賞",
      description: "ドローン群の飛行は1台のPCでまとめて制御して行います。夜空に描かれる光の物語を、皆で共有する感動の瞬間。",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
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
          <h1 className="text-4xl font-bold mb-4">空神楽の作り方</h1>
          <p className="text-lg text-muted-foreground">
            あなたのアイデアを夜空に描く、4つのステップ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <step.icon className="absolute bottom-4 right-4 h-8 w-8 text-primary drop-shadow-lg" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="text-primary mr-2">#{index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}