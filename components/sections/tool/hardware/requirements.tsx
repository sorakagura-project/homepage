"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function HardwareRequirements() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">使用ドローンの要件</h1>
          <p className="text-lg text-muted-foreground">
            空神楽で使用するドローンに必要な条件
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">必須要件</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Pixhawk系列のフライトコントローラー搭載（PixhawkやCube Blackなど）
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Mavlinkを用いた通信が可能
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">より望ましいオプション</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      ライティングモジュール
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      RTK通信
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      予備の周波数チャネル
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pt-6 border-t">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">詳細な技術仕様</h3>
                  <p className="text-muted-foreground mb-4">
                    より詳細な技術仕様や要件については、公式ドキュメントをご確認ください。
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://doc.collmot.com/public/skybrush-live-doc/latest/hardware.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      技術仕様を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">技術サポート</h3>
                  <p className="text-muted-foreground mb-4">
                    制作手法や飛行実験などについて、Discordコミュニティで相談できます。
                  </p>
                  <Button asChild>
                    <a 
                      href="https://discord.gg/your-invite-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Discordに参加
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}