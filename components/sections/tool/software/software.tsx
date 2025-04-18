"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export function ToolSoftware() {
  const software = [
    {
      name: "3Dアニメーションソフト/Blender",
      description: "3次元空間上に物の形や動きを設計します。次のプラグインソフトと合わせて、ドローン群の動きをデザインします。Blender以外にも3ds MaxやCinema4Dなどでも可。",
      features: [
        "3Dビジュアルエディタ",
        "リアルタイムプレビュー",
        "物理シミュレーション"
      ],
      downloadUrl: "https://www.blender.org/download/",
      image: "/images/blender.jpg"
    },
    {
      name: "空神楽デザインソフト/Skybrush",
      description: "Blenderなどの3Dアニメーションソフトのプラグインとして使います。光の群れのデザインを様々な機能で支援してくれます。",
      features: [
        "ストーリーボードの実装",
        "ドローン移動経路の最適化",
        "カラーリングUI",
        "危険回避機能"
      ],
      downloadUrl: "https://skybrush.io/modules/studio/",
      image: "/images/skybrush-blender.jpg"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">ソフトウェア</h2>
          <p className="text-lg text-muted-foreground">
            創作に必要なツール群をダウンロード
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {software.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-auto">
                    <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      ダウンロード
                    </a>
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