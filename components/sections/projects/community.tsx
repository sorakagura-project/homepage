"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'

interface ProjectCommunityProps {
  discordUrl: string
}

export function ProjectCommunity({ discordUrl }: ProjectCommunityProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-primary text-primary-foreground text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">プロジェクトコミュニティに参加</h2>
            <p className="mb-6">
              Discordで仲間とつながり、アイデアを共有しましょう。
              経験豊富なメンバーのサポートを受けながら、プロジェクトを進めることができます。
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discordに参加する
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}