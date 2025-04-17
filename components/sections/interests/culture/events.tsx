"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export function CultureEvents() {
  const workshops = [
    {
      title: "光のアート表現ワークショップ",
      description: "ドローンを使った光の表現方法を学び、独自の作品を創作します。",
      date: "2024年5月",
      location: "東京",
      capacity: "15名",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
    },
    {
      title: "メディアアート入門",
      description: "テクノロジーを使った芸術表現の基礎を学びます。",
      date: "2024年6月",
      location: "横瀬町",
      capacity: "20名",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800"
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
            表現の可能性を広げる学びの場
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
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
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

                  <Button asChild>
                    <Link href="/enjoy/learn/workshops">
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