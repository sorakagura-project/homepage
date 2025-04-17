"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Users, Trophy, Rocket } from 'lucide-react'

export function JoinBenefits() {
  const benefits = [
    {
      title: "楽しさを",
      description: "多様な人の創造に触れる中で自分の中にも創造の種をたくさん蒔くことができます。",
      icon: Sparkles
    },
    {
      title: "多様な人、知、創造、土地との出逢い",
      description: "様々な分野のクリエイターやエンジニアと交流し、互いに刺激し合える環境があります。未来をつくる活力のある人との仕事は自分のエネルギーを大きく揺さぶります。",
      icon: Users
    },
    {
      title: "手軽な参加/個々の生活に合わせた働き方",
      description: "副業など今の仕事、生活を捨てずに豊かな選択肢を増やすことができます。柔軟に対応します。無理をしない。土地や時間など柔軟に設計します。急速な利潤拡大は目指さず。",
      icon: Rocket
    },
    {
      title: "文化の創造という挑戦",
      description: "現代は時代の大きな転換点と言われています。時代の転換点において人類はこれまで大きな文化革命を起こしてきました。このプロジェクトも現代に新たなルネサンスを起こせるかに挑戦する意欲的なプロジェクトです。ただの娯楽作りでもなく、利便性追求でもない、未来を豊かに描くための真に価値ある活動に携われます。",
      icon: Rocket
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
          <h2 className="text-3xl font-bold mb-4">参加のメリット</h2>
          <p className="text-lg text-muted-foreground">
            プロジェクトを通じて得られる価値
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}