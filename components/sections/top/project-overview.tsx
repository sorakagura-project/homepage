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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">空神楽プロジェクトとは</h2>
          <p className="text-lg leading-relaxed mb-6">
            空神楽（そらかぐら）とは、人とドローンが集い、<br className="block sm:hidden" />夜空に光の物語を描く、<br />美しさと楽しさに満ちた<br className="block sm:hidden" />人機共創の演舞です。
          </p>
          <p className="text-lg leading-relaxed mb-6">
            このプロジェクトは、<br className="block sm:hidden" />年齢、能力、肩書き、一切関係なく、<br />空神楽の鑑賞/実演/制作を一緒に<br className="block sm:hidden" />楽しむ、全ての人の好奇心に<br className="block sm:hidden" />開かれた<br className="hidden md:block" />非営利かつオープンな<br className="block sm:hidden" />プロジェクトです。
          </p>
          <p className="text-lg leading-relaxed mb-6">
            AI、経済、地球環境の<br className="block sm:hidden" />めまぐるしい変化の中で、<br />仕事/お金の不安、暇、無力さと虚無感<br className="block sm:hidden" />に襲われる中でも、
            <br />今を生きるわたしたちの、<br className="block sm:hidden" />生・創造の美が集い重なり合い、<br />
            人・テクノロジー・自然の美しい未来を創造する場となることを目指します。
          </p>
        </motion.div>
      </div>
    </section>
  )
}