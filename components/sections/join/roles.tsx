"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code, Palette, Camera, Users, Wrench, PenTool, Heart } from 'lucide-react'

export function JoinRoles() {
  const roles = [
    {
      title: "アニメーター（魂を吹き込む人）/アーティスト",
      description: "空神楽プロジェクトの中核のイメージを具現化する人として、各地でディスプレイする作品の制作に携わります。人間/テクノロジー/自然、伝統/未来が交差する中で共に生きる光の集団の物語を描きます",
      icon: Palette,
      skills: ["物語", "アニメーション", "群れの表現", "3Dモデリング"],
      location: "リモート",
      frequency: "週1日程度（応相談）"
    },
    {
      title: "プロジェクトマネージャー",
      description: "必要な人員、資金、時間を見極め、プロジェクトを推し進める役割を担います",
      icon: Users,
      skills: ["マネージメント", "ファイナンス", "戦略立案"],
      location: "リモート",
      frequency: "週1日程度（応相談）"
    },
    {
      title: "ドローンエンジニア",
      description: "ドローンの開発プロジェクトと実演時の機体運用にコミットします",
      icon: Code,
      skills: ["ドローン開発", "制御工学"],
      location: "リモート、実演時に移動（応相談）",
      frequency: "週3-4日程度（応相談）"
    },
    {
      title: "映像作家",
      description: "プロジェクトの映像の制作を通じて人々の喜びと感動を連鎖させ、みなが参加したくなるプロジェクトへブランディングします",
      icon: Camera,
      skills: ["撮影", "編集", "ストーリーテリング"],
      location: "南相馬市、横瀬町、リモート",
      frequency: "月1-2日程度（応相談）"
    },
    {
      title: "芸術教育者",
      description: "表現する技術の伝達を通じて、人が物を現す手助けをします",
      icon: PenTool,
      skills: ["美術教育", "ドローイング", "アニメーション"],
      location: "南相馬市",
      frequency: "週1-2日程度（応相談）"
    },
    {
      title: "オープンポジション",
      description: "上記以外にも絶賛仲間を大大大募集中です。アプリケーションエンジニア、コミュニティファシリテーター、イベントデザイナー、HRIエンジニアなど多様な役割で応募/相談受け付けています",
      icon: Heart,
      skills: ["好奇心", "思いやり"],
      location: "応相談",
      frequency: "応相談"
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">募集している役割</h2>
          <p className="text-lg text-muted-foreground">
            プロジェクトの運営母体を<br className="block sm:hidden" />構成するメンバーとして、
            <br className="block sm:hidden" />未来の文化の創造に共に取り組みます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <role.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-muted-foreground mb-4">{role.description}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold">使うスキル:</p>
                    <ul className="text-sm text-muted-foreground">
                      {role.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">暫定勤務地:</p>
                    <p className="text-sm text-muted-foreground">{role.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">暫定勤務頻度:</p>
                    <p className="text-sm text-muted-foreground">{role.frequency}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}