"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { sendContactForm } from '@/lib/send-contact-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function JoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(event.currentTarget)
    
    try {
      await sendContactForm({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: `
役割: ${formData.get('role')}
経験・スキル: ${formData.get('experience')}
志望動機: ${formData.get('motivation')}
        `,
        formType: 'join'
      })
      setSubmitStatus('success')
      event.currentTarget.reset()
    } catch (error) {
      console.error('Failed to send form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">相談/応募フォーム</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">お名前</Label>
                <Input id="name" name="name" placeholder="空神 太郎" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" placeholder="taro@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">興味のある役割</Label>
                <Select name="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="役割を選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="animator">アニメーター/アーティスト</SelectItem>
                    <SelectItem value="manager">プロジェクトマネージャー</SelectItem>
                    <SelectItem value="engineer">ドローンエンジニア</SelectItem>
                    <SelectItem value="videographer">映像作家</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">関連する経験・スキル</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="これまでの経験やお持ちのスキルについて教えてください"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">聞いてみたいことor応募理由</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  placeholder="プロジェクトへの関わりについて相談したいことや参加したい理由などを簡単に教えてください"
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  送信が完了しました。また確認次第ご連絡させて頂きます。
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}