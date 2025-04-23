"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TravelMap() {
  const locations = [
    {
      id: "odaka",
      name: "小高-南相馬市",
      description: "福島県南相馬市小高区は、震災で人口がゼロになった後、地域の文化に根ざした100のユニークな商いを生もうとする街づくりのフロンティア。馬、酒、芸術、テクノロジーなど多様な営みと人の挑戦が交わり、類を見ない姿を育んでいます。",
      features: [
        "人口ゼロからの復興",
        "100のユニークなビジネス",
        "馬の街/野馬追祭り",
        "ロボット/宇宙産業"
      ],
      image: "/images/odaka-nomaoi.webp"
    },
    {
      id: "yokoze",
      name: "横瀬-秩父郡",
      description: "埼玉県秩父郡横瀬町は、豊かな自然、あたたかい人のつながりと多様な挑戦が淀みなく巡る調和した町。都会からほど近い里山で、山、川、人に癒されながら、穏やかで新しい学びと創作にあふれた時間を過ごせます。",
      features: [
        "日本一チャレンジする町",
        "カラフルタウン",
        "寺坂棚田・武甲山・ウォーターパーク",
        "秩父夜祭り"
      ],
      image: "/images/yokoze-kagaribi.webp"
    },
    {
      id: "hanegi",
      name: "羽根木~下北沢-東京",
      description: "日本初の常設の冒険遊び場として作られた羽根木プレーパークから、線路跡地に作られた公園的市場BONUS TRACKを経て、実験し続ける街に変化する下北沢へと続くエリア。遊び心を何よりの源泉とし空神楽の活動の集約点とします。",
      features: [
        "冒険遊び場",
        "羽根木公園",
        "BONUS TRACK",
        "空神楽研究集約点"
      ],
      image: "/images/hanegi.jpg"
    },
    {
      name: "展開予定",
      description: "創作拠点を構えたい個人、行政の方などお声がけお待ちしております。",
      features: [
        "-"
      ],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      comingSoon: true
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">提携地域</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            日本各地で展開する空神楽の拠点
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="object-cover w-full h-full"
                    />
                    {location.comingSoon && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">今後展開予定</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                    <p className="text-muted-foreground mb-4">{location.description}</p>
                    <div className="space-y-2 mb-6 flex-1">
                      {!location.comingSoon && (
                        <h4 className="font-semibold mt-auto">地域概要:</h4>
                      )}
                      {!location.comingSoon && (
                      <ul className="space-y-1 mt-auto">
                        {location.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      )}
                    </div>
                    {!location.comingSoon && (
                      <Button asChild className="mt-auto">
                        <Link href={`/locations/${location.id}`}>
                          詳しく見る
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {location.comingSoon && (
                      <Button asChild className="mt-auto">
                        <Link href={`/collab#contact`}>
                          問い合わせはこちら
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}