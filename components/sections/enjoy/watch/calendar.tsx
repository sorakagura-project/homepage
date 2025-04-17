"use client"

import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { ja } from 'date-fns/locale'

export function WatchCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // イベント日程（実際のアプリケーションではAPIから取得）
  const events = [
    new Date(2024, 3, 5), // 4月5日
    new Date(2024, 4, 3), // 5月3日
    new Date(2024, 4, 25), // 5月25日
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">イベントカレンダー</h2>
          
          <Card className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ja}
              modifiers={{
                event: events
              }}
              modifiersStyles={{
                event: {
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'white'
                }
              }}
              className="mx-auto"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}