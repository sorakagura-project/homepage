"use client"

import { motion } from 'framer-motion'
import { Users, Building2, Sparkles } from 'lucide-react'

export function ProjectValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          体験して得られる価値
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title:  (
                <>
                  情動
                  <br />
                  &nbsp;&nbsp;&nbsp;ーあなたの中の美しさを動かす物
                </>
              ),
              description: "空虚でどうしようもない社会に押しつぶされ、なにも動けない日常に、空神楽のもたらす美と出会いが、驚きと愛と好奇心の息吹を吹き込み、あなたが動く原動力が生まれます。",
              image: "https://images.unsplash.com/photo-1718303224196-a19f9b30cb17?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              icon: Users
            },
            {
              title: (
                <>
                  技術
                  <br />
                  &nbsp;&nbsp;&nbsp;ーあなたを表すことを助け、<br className="block sm:hidden" /><span className="inline-block sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>存在させるもの
                </>
              ),
              description: "あなたの中に眠る、複雑で美しくユニークな何かが、テクノロジー、美術、物語、科学など多様な技術の感得や創作を通じて、この世界に現れることを助けます。",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
              icon: Building2
            },
            {
              title: (
                <>
                  世界、未来との関係の再構築
                  <br />
                  &nbsp;&nbsp;&nbsp;ーあなたの人生に<br className="block sm:hidden" /><span className="inline-block sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>意味をあたえるもの
                </>
              ),
              description: "多様な人/考えと出会う中で、自分が世界の多様な存在とともに生きともに未来を生み出していることを感じることができます。空神楽を通じて多様な人、お金/スマホといった技術、自然との生き方を再構築します。",
              image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              icon: Sparkles
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img 
                  src={value.image} 
                  alt={typeof value.title === 'string' ? value.title : 'Value image'}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <value.icon className="absolute bottom-4 right-4 h-8 w-8 text-primary z-20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}