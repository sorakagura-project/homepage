"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export function ToolWorkshops() {
  const workshops = [
    {
      title: "初心者向けワークショップ",
      description: "空神楽の基礎から学ぶ、1日集中講座。経験豊富な講師が丁寧に指導します。",
      date: "2024年4月20日(土)",
      location: "渋谷テックセンター",
      capacity: "15名",
      price: "15,000円",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
    },
    {
      title: "アドバンスドコース",
      description: "より高度な表現技法を学ぶ、3日間の集中プログラム。作品制作まで行います。",
      date: "2024年5月3日(金)〜5日(日)",
      location: "六本木アートセンター",
      capacity: "10名",
      price: "45,000円",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
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
          <h2 className="text-3xl font-bold mb-4">ワークショップ</h2>
          <p className="text-lg text-muted-foreground">
            実践的な技術を、仲間と一緒に学ぶ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-4">{workshop.description}</p>
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>定員 {workshop.capacity}</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary mb-4">{workshop.price}</p>
                  <Button asChild className="w-full">
                    <Link href="/workshops/apply">
                      申し込む
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}