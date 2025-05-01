"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, MessageSquare, MessageCircle, ArrowRight } from 'lucide-react'
import { LINKS } from '@/lib/links'

export function FollowUs() {
  const steps = [
    {
      title: "1. プロジェクトの魅力を知る",
      description: "写真や動画で、空神楽の美しい世界をご覧ください。",
      links: [
        {
          name: "Instagram",
          url: "LINKS.instagram",
          icon: Instagram,
          style: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90"
        },
        {
          name: "Youtube",
          url: "LINKS.youtube",
          icon: Youtube,
          style: "bg-[#FF0000] text-white hover:bg-[#FF0000]/90"
        }
      ]
    },
    {
      title: "2. プロジェクトにゆるくつながる",
      description: "最新情報やイベント情報をゲットできます。",
      links: [
        {
          name: "LINE Openchat",
          url: "LINKS.lineopenchat",
          icon: MessageSquare,
          style: "bg-[#00B900] text-white hover:bg-[#00B900]/90"
        }
      ]
    },
    {
      title: "3. プロジェクトの制作に関わる",
      description: "制作チームと交流して、プロジェクトをさらに盛り上げましょう！",
      links: [
        {
          name: "Discord",
          url: "LINKS.discord",
          icon: MessageCircle,
          style: "bg-[#5865F2] text-white hover:bg-[#5865F2]/90"
        }
      ]
    }
  ]

  return (
    <section id="SNS" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">SNSをフォロー</h2>
          <p className="text-lg text-muted-foreground">
            あなたに合った方法で<br className="block sm:hidden" />プロジェクトに参加
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                <div className="mt-auto space-y-4">
                  {step.links.map((link) => (
                    <Button
                      key={link.name}
                      className={`w-full transition-all duration-300 ${link.style}`}
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}