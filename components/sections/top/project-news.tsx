"use client"

import { motion } from 'framer-motion'
import { Calendar, Users2, Wrench, MapPin, Users } from 'lucide-react'
import type { NewsItem } from '@/lib/types/project'

export function ProjectNews() {
  const newsItems: NewsItem[] = [
    {
      date: "2025.04.01",
      title: "プロジェクトメンバー募集開始",
      content: "プロジェクトの発展、新しい未来の創造に向けて、仲間の募集を開始しました。",
      type: "event",
      icon: Users2
    }
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container max-w-2xl">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          プロジェクトニュース
        </motion.h2>
        <div className="space-y-6">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 before:content-[''] before:absolute before:left-[15px] before:top-[28px] before:bottom-[-12px] before:w-[2px] before:bg-border last:before:hidden"
            >
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <news.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <time className="text-sm text-muted-foreground font-english">{news.date}</time>
                <h3 className="text-xl font-semibold my-2">{news.title}</h3>
                <p className="text-muted-foreground mb-4">{news.content}</p>
                {(news.location || news.participants) && (
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 pt-4 border-t">
                    {news.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{news.location}</span>
                      </div>
                    )}
                    {news.participants && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{news.participants}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}