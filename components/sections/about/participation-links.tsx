"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Paintbrush, Wrench, Users, ArrowRight } from 'lucide-react'

export function ParticipationLinks() {
  const links = [
    {
      title: "実演の手伝い",
      description: "大迫力の実演のサポートをする",
      icon: Paintbrush,
      href: "/enjoy/watch#participation"
    },
    {
      title: "プロジェクト参加",
      description: "多様な創作の波に加わる",
      icon: Wrench,
      href: "/enjoy/create"
    },
    {
      title: "運営サポート",
      description: "プロジェクトの運営に加わる",
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
            あなたの好奇心と情熱を活かす場所がここに
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
              プロジェクトへの多様な参加方法についてはこちら
            </p>
            <Button variant="ghost" asChild>
              <Link href="/join#apply">
                参加のオプション
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              プロジェクトの運営メンバーについて
            </p>
            <Button variant="ghost" asChild>
              <Link href="/member">
                メンバーの紹介
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}