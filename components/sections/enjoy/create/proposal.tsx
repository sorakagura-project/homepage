"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Lightbulb } from 'lucide-react'

export function CreateProposal() {
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

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">プロジェクト名</Label>
                <Input
                  id="title"
                  placeholder="あなたのプロジェクトの名前を入力してください"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">概要</Label>
                <Textarea
                  id="summary"
                  placeholder="プロジェクトの目的や概要を簡潔に説明してください"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">詳細な説明</Label>
                <Textarea
                  id="details"
                  placeholder="プロジェクトの具体的な内容、必要な技術、期待される成果などを詳しく記述してください"
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="required-skills">必要なスキル・リソース</Label>
                <Textarea
                  id="required-skills"
                  placeholder="プロジェクトの実現に必要なスキルやリソースを列挙してください"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">想定タイムライン</Label>
                <Textarea
                  id="timeline"
                  placeholder="プロジェクトの実施期間や主要なマイルストーンを記入してください"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">連絡先</Label>
                <Input
                  id="contact"
                  type="email"
                  placeholder="連絡先のメールアドレスを入力してください"
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