"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Paintbrush, Wrench, Users, ArrowRight } from 'lucide-react'

export function ParticipationLinks() {
  const links = [
    {
      title: "実演支援",
      description: "ドローンショーの運営をサポート",
      icon: Paintbrush,
      href: "/enjoy/watch#participation"
    },
    {
      title: "技術開発",
      description: "新しい表現技術の開発に参加",
      icon: Wrench,
      href: "/enjoy/create"
    },
    {
      title: "運営サポート",
      description: "プロジェクトの運営をサポート",
      icon: Users,
      href: "/join"
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
              参加方法
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            あなたの才能と情熱を活かす場所がここに
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <link.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                <p className="text-muted-foreground mb-6">{link.description}</p>
                <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={link.href}>
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              プロジェクトへの参加方法について、より詳しい情報が必要な方はこちら
            </p>
            <Button variant="ghost" asChild>
              <Link href="/join">
                参加について
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}