"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function SchoolEnvironment() {
  const facilities = [
    {
      title: "南相馬市小高拠点",
      description: "馬とロボットと宇宙が交わる創造の場",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      status: "準備中"
    },
    {
      title: "秩父郡横瀬拠点",
      description: "自然と温かさと情熱が集う創造拠点",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      status: "準備中"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">学習拠点</h2>
          <p className="text-lg text-muted-foreground">
            拠点、地域それぞれの学びの環境
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{facility.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}