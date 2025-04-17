"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FlaskRound as Flask, Palette, Cpu, Heart, School, Wrench, Sparkles, Rocket } from 'lucide-react'
import { useState } from 'react'

export function SchoolPrograms() {
  const [selectedField, setSelectedField] = useState<string | null>(null)
  const [selectedStage, setSelectedStage] = useState<string | null>(null)

  const fields = ["科学", "美術", "テクノロジー", "生き方"]
  const stages = ["楽しさを感じたい", "基礎技術を身につけたい", "創造してみたい", "社会に向けて創造したい"]

  // プログラムの例を定義
  const programExamples: Record<string, Record<string, string>> = {
    "科学": {
      "楽しさを感じたい": "天体観測や森の散策を通じて、世界にいる感覚を体で学びます。自然界の不思議さと美しさを五感で感じ取る。",
      "基礎技術を身につけたい": "生成AIと共に深めたい探求に必要な知識、実験、思考法を習得する。",
      "創造してみたい": "自分の興味をもったテーマに対して、自分独自の仮説をつくり、検証するプロセスを学ぶ。",
      "社会に向けて創造したい": "深める研究のテーマが社会といかに関わりがあり、どのような形で価値をもたらせるかを学ぶ。"
    },
    "美術": {
      "楽しさを感じたい": "美しいものに触れた時、自分の中になにが生まれるかを感じるかを見つめるプロセスを学ぶ。",
      "基礎技術を身につけたい": "色彩理論や構図の基礎を学ぶと共に、デジタルツールを含む様々な表現技法を体験し実践的に習得する。",
      "創造してみたい": "インスタレーションやパフォーマンスアートの作品を制作。空間全体を使った表現に挑戦します。",
      "社会に向けて創造したい": "パブリックアートや地域アートプロジェクトを企画・実施。社会との対話を創出します。"
    },
    "テクノロジー": {
      "楽しさを感じたい": "生成AIやAR、ロボットを用いて最先端のテクノロジーでどんなワクワクする創造ができるかを体験する。。",
      "基礎技術を身につけたい": "生成AIと実際のオープンソーステクノロジーに触れながらソフトウェアやハードウェアの作り方を学ぶ。",
      "創造してみたい": "空神楽プロジェクトに関わるようなオリジナルのテクノロジーを実装してみる。",
      "社会に向けて創造したい": "社会の課題とテクノロジーの結びつきを理解し、新たな創造で世界に新たな価値をもたらす。"
    },
    "生き方": {
      "楽しさを感じたい": "哲学的な問いかけを通じて、自分自身と向き合う時間を持ちます。",
      "基礎技術を身につけたい": "対話と傾聴の技術を学び、他者との深い関係性を築く方法を習得します。",
      "創造してみたい": "自分の価値観や人生観をアート作品として表現します。",
      "社会に向けて創造したい": "コミュニティづくりや社会活動のプロジェクトを立ち上げます。"
    }
  }

  const handleFieldClick = (field: string) => {
    setSelectedField(selectedField === field ? null : field)
  }

  const handleStageClick = (stage: string) => {
    setSelectedStage(selectedStage === stage ? null : stage)
  }

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">学習プログラム</h2>
          <p className="text-lg text-muted-foreground">
            分野とステージを選んで、あなたに合ったプログラムを見つけましょう
          </p>
        </motion.div>

        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">探求分野を選ぶ</h3>
              <div className="grid grid-cols-2 gap-4">
                {fields.map((field) => (
                  <Button
                    key={field}
                    variant={selectedField === field ? "default" : "outline"}
                    className="h-auto py-4 px-6 text-left"
                    onClick={() => handleFieldClick(field)}
                  >
                    {field}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">学びのステージを選ぶ</h3>
              <div className="grid grid-cols-2 gap-4">
                {stages.map((stage) => (
                  <Button
                    key={stage}
                    variant={selectedStage === stage ? "default" : "outline"}
                    className="h-auto py-4 px-6 text-left"
                    onClick={() => handleStageClick(stage)}
                  >
                    {stage}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            {selectedField && selectedStage ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-muted/50 p-6 rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-4">
                  {selectedField} × {selectedStage}
                </h4>
                <p className="text-muted-foreground">
                  {programExamples[selectedField][selectedStage]}
                </p>
              </motion.div>
            ) : (
              <p className="text-muted-foreground">
                分野とステージを選択すると、おすすめのプログラムが表示されます
              </p>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}