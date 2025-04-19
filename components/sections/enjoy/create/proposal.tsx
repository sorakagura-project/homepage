"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Lightbulb } from 'lucide-react'

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)

  const title = formData.get('title') as string
  const summary = formData.get('summary') as string
  const details = formData.get('details') as string
  const contact = formData.get('contact') as string

  try {
    const response = await fetch('${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/project-proposal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ title, summary, details, contact }),
    })

    if (!response.ok) {
      throw new Error('送信に失敗しました')
    }

    alert('提案が正常に送信されました！')

  } catch (error) {
    console.error(error)
    alert('送信中にエラーが発生しました')
  }
}

export function ProjectProposal() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">新しいプロジェクトの提案</h2>
                <p className="text-muted-foreground">
                  あなたのアイデアを実現するチャンス
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="title">プロジェクト名</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="あなたのプロジェクトの名前を入力してください"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">概要</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  placeholder="プロジェクトの目的や概要を簡潔に説明してください"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">詳細な説明</Label>
                <Textarea
                  id="details"
                  name="details"
                  placeholder="プロジェクトの具体的な内容、必要な技術、期待される成果などを詳しく記述してください"
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">連絡先</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="email"
                  placeholder="連絡先を入力してください"
                />
              </div>

              <Button type="submit" className="w-full">
                プロジェクトを提案する
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}