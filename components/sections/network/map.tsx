"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function NetworkMap() {
  const locations = [
    {
      name: "南相馬市",
      type: "主要拠点",
      features: ["神楽塾", "ドローン開発施設", "実演フィールド"]
    },
    {
      name: "横瀬町",
      type: "主要拠点",
      features: ["クリエイティブスペース", "ワークショップ会場", "山岳実演エリア"]
    },
    {
      name: "上野恩賜公園",
      type: "実演会場",
      features: ["大規模イベント会場", "文化施設連携"]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">活動拠点マップ</h2>
          <p className="text-lg text-muted-foreground">
            全国に広がる空神楽のネットワーク
          </p>
        </motion.div>

        <Card className="p-8">
          <div className="relative aspect-[16/9] mb-8">
            <img
              src="/images/light-map.jpg"
              alt="活動拠点マップ"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                  <p className="text-primary text-sm">{location.type}</p>
                  <ul className="space-y-2">
                    {location.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}