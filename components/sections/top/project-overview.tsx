"use client"

import { motion } from 'framer-motion'

export function ProjectOverview() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="relative py-20 bg-background/50">
      <div className="absolute inset-0 z-0">
        <img
          src="/public/images/future_festival.jpg"
          alt="背景"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8">空神楽プロジェクトとは</h2>
          <p className="text-lg leading-relaxed mb-6">
            空神楽とは、人とドローンが集い、夜空に光の物語を描く、<br />美しさと楽しさに満ちた人機共創の演舞です。
          </p>
          <p className="text-lg leading-relaxed mb-6">
            このプロジェクトは、年齢、能力、肩書き、一切関係なく、<br />空神楽の鑑賞/実演/制作を一緒に楽しむ、全ての人の好奇心に開かれた<br />非営利かつオープンなプロジェクトです。
          </p>
          <p className="text-lg leading-relaxed mb-6">
            AI、経済、地球環境のめまぐるしい変化の中で、<br />仕事の不安、お金の不安、命の不安に襲われる中でも、
            <br />今を生きるわたしたちの、生・創造の美が集い重なり合い、<br />
            人・テクノロジー・自然の美しい未来を創造する場となることを目指します。
          </p>
        </motion.div>
      </div>
    </section>
  )
}