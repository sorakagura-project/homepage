"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Map, Briefcase, Camera } from 'lucide-react'

export function TravelServices() {
  const services = [
    {
      title: "ADDress",
      description: "全国のシェアハウスに住み放題の多拠点居住コミュニティサービス。",
      features: [
        "月額制の全国住み放題",
        "コミュニティへの参加",
        "地域との交流機会"
      ],
      icon: Building2,
      link: "https://address.love/",
      image: "/images/ADDress.jpg",
      prepare: false
    },
    {
      title: "遊ぶ広報",
      description: "暮らすようにまちに滞在しながらあなたの心が動いた瞬間をSNS発信すると滞在費が補助される、ちょっとお得なプログラム。",
      features: [
        "短期の地域滞在プログラム",
        "個人に合わせた観光プログラム",
        "宿泊費補助"
      ],
      icon: Camera,
      link: "https://asobu-koho-plus.studio.site/",
      image: "/images/asobukouhou.jpg",
      prepare: false
    },
    {
      title: "おてつたび",
      description: "地域の仕事とワーケーションを組み合わせた体験プログラム。",
      features: [
        "短期の地域滞在プログラム",
        "地域の仕事体験",
        "宿泊費補助"
      ],
      icon: Briefcase,
      link: "https://otetutabi.com/",
      image: "/images/otetutabi.jpg",
      prepare: true
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
          <h2 className="text-3xl font-bold mb-4">旅のサポートサービス</h2>
          <p className="text-lg text-muted-foreground">
            快適な滞在をサポートする各種サービス
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.prepare ? (
                    <Button disabled className="mt-auto">
                      準備中
                    </Button>
                  ) : (
                    <Button asChild className="mt-auto">
                      <a 
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}