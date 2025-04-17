"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, ShoppingCart, Wrench } from 'lucide-react'
import Link from 'next/link'

export function ProjectOptions() {
  const options = [
    {
      title: "持ち寄る",
      description: "あなたの持つドローンを持ち寄り、一緒に空神楽の中に飛ばしましょう。みなで持ち寄り、よりスペクタクルな空神楽を作り上げ、大きな感動を誕生させます。",
      icon: ShoppingCart,
      action: {
        text: "詳しく見る",
        href: "/hardware/bring"
      },
      disabled: false
    },
    {
      title: "購入する",
      description: "空神楽用に最適化された推奨ドローンを購入できます。これらは安全性と性能が実証済みで、すぐに空神楽に参加可能です。",
      icon: ShoppingCart,
      action: {
        text: "推奨機体を見る",
        href: "/hardware/recommended"
      },
      disabled: true
    },
    {
      title: "制作する",
      description: "オープンソースの設計図をもとに、自分でドローンを制作できます。コミュニティと共に、より良い機体の開発に参加しましょう。",
      icon: Wrench,
      action: {
        text: "制作方法を学ぶ",
        href: "/hardware/build"
      },
      disabled: false
    },
    {
      title: "支援する",
      description: "プロジェクトへの支援を通じて、ドローンの調達と維持に貢献できます。支援者には特別なイベントへの参加機会や、制作過程の詳細な情報が提供されます。",
      icon: Heart,
      action: {
        text: "支援について詳しく見る",
        href: "/support"
      },
      disabled: true
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">ドローンを通じたプロジェクトへの参加</h2>
          <p className="text-lg text-muted-foreground">
            プロジェクトに参加する4つの方法
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={option.disabled ? 'opacity-50' : ''}
            >
              <Card className="p-6 h-full flex flex-col">
                <option.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>
                {option.disabled ? (
                  <Button disabled className="w-full mt-auto">
                    準備中
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button asChild className="w-full mt-auto">
                    <Link href={option.action.href}>
                      {option.action.text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
