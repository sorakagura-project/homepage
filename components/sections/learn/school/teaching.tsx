"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, Heart, Users } from 'lucide-react'
import Link from 'next/link'

export function SchoolTeaching() {
  const roles = [
    {
      title: "先生",
      description: "専門分野の面白さと作る経験的知を伝えます。",
      requirements: [
        "該当分野での実務経験１年以上",
        "年齢、学習段階関係なく尊重し一緒に学ぶことを楽しめる方",
        "自分自身もこのプロジェクトを楽しめる人"
      ],
      icon: GraduationCap,
      color: "from-deepRed to-gold"
    },
    {
      title: "人をつなぎ、育てる人",
      description: "一人一人の良さを見つけ、他者との関わり方を理解し、”自分も”皆も楽しくいられる学び場をつくる",
      requirements: [
        "凡そ分け隔てなく人と関われる人",
        "発達障害等マイノリティー、インクルーシブに関する知見",
        "自分自身も創作を楽しめる人"
      ],
      icon: Heart,
      color: "from-gold to-youngGrass"
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
          <h2 className="text-3xl font-bold mb-6">教える側として<br className="block sm:hidden" />参加する</h2>
          <p className="text-lg text-muted-foreground">
            学ぶだけでなく、教える側、学び場を作る側もやってみたいという方も募集しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center mb-6`}>
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                <p className="text-muted-foreground mb-6">{role.description}</p>
                <div className="space-y-2 mb-8">
                  <h4 className="font-semibold">向いている方</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-auto" asChild>
                  <Link href="/join">
                    応募する
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