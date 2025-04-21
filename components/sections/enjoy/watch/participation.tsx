"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, Users2, Pencil, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function WatchParticipation() {
  const options = [
    {
      title: "鑑賞して、感じる",
      description: "夜空に広がる光の物語を、ゆっくりとお楽しみください。色々なものとの繋がりと自分の感情を感じながら、新しい体験の記憶を作りましょう。各イベントでは撮影コンテストも行い、制作チームからの表彰も行います。",
      icon: Eye,
      href: "/tickets",
      buttonText: "SNSをフォロー"
    },
    {
      title: "手伝って大迫力（人数限定）",
      description: "空神楽の実演準備はドローンの運搬配置などで人手が必要です。協力して祭りの準備をし、物語のはじまる前の時間を楽しく過ごしましょう。そして実演時、希望する人は空神楽が舞う迫力をより近くで体験して頂けます。何十、何百のドローンが一斉に舞う迫力を体で味わえます。",
      icon: Users2,
      href: "/join/support",
      buttonText: "サポーター登録"
    },
    {
      title: "一緒にハレの日を彩る",
      description: "物語の制作、出店の出店、パフォーマンス、空間演出など。空神楽に集う自分たちの好奇心で、楽しさに満ちた非日常を作り出します。",
      icon: Pencil,
      href: "/join/create",
      buttonText: "プロジェクトに参加"
    },
    {
      title: "ドローンを持ち寄ってさらなるスペクタクルを生む",
      description: "あなたの持つドローンを持ち寄り、一緒に空神楽の中に飛ばしましょう。みなで持ち寄り、よりスペクタクルな空神楽を作り上げ、大きな感動を誕生させます。",
      icon: Pencil,
      href: "/join/create",
      buttonText: "詳細を見る"
    }
  ]

  return (
    <section id="participation" className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">参加方法</h2>
          <p className="text-lg text-muted-foreground">
            あなたに合った関わり方を<br className="block sm:hidden" />見つけてください
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <option.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>
                <Button asChild className="w-full">
                  <Link href={option.href}>
                    {option.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}