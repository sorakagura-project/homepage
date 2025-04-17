"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function ProjectScale() {
  const scales = [
    {
      range: "-50台",
      title: "抽象的な幾何学模様",
      image: "/images/abstract-expression.jpeg"
    },
    {
      range: "100-300台",
      title: "立体的な表現",
      image: "/images/spectacle-creature.jpg"
    },
    {
      range: "500台以上",
      title: "夜空に広がるスペクタクルな表現",
      image: "/images/spectacle-expression.jpeg"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">現在の空神楽の規模</h2>
          <Card className="p-8 text-center mb-8">
            
            <div className="relative inline-block mb-2">
              <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo animate-pulse">
                48
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">
                台
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              より多くのドローンを集め、より壮大な物語を描くために
            </p>
          </Card>

          <h3 className="text-2xl font-bold text-center mb-8">規模による表現の可能性</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scales.map((scale, index) => (
              <motion.div
                key={scale.range}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <img
                      src={scale.image}
                      alt={scale.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {scale.range}
                    </div>
                    <h4 className="text-lg font-semibold">{scale.title}</h4>
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