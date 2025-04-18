"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { sendContactForm } from '@/lib/send-contact-form'
import { Calendar, ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CollabContact() {
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
組織名: ${formData.get('organization')}
組織種別: ${formData.get('type')}
担当者名: ${formData.get('name')}
電話番号: ${formData.get('phone')}
興味のある協力形態: ${formData.get('interest')}

その他メッセージ:
${formData.get('message')}
        `,
        formType: 'collab'
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
            <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="organization">組織名</Label>
                <Input id="organization" name="organization" placeholder="株式会社空神楽" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">組織種別</Label>
                <Select name="type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="組織の種別を選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">企業</SelectItem>
                    <SelectItem value="government">地方自治体/地域活性関係者</SelectItem>
                    <SelectItem value="temple">寺社仏閣</SelectItem>
                    <SelectItem value="npo">社会活動団体</SelectItem>
                    <SelectItem value="npo">自然関係業界の方</SelectItem>
                    <SelectItem value="npo">アーティスト/アート団体</SelectItem>
                    <SelectItem value="npo">教育関係</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">担当者名</Label>
                <Input id="name" name="name" placeholder="空神 太郎" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" placeholder="taro@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input id="phone" name="phone" type="tel" placeholder="03-1234-5678" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">興味のある協力形態</Label>
                <Textarea
                  id="interest"
                  name="interest"
                  placeholder="ご興味のある協力形態について具体的にお書きください"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">その他メッセージ</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="その他ご要望やご質問などございましたらお書きください"
                  rows={4}
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
                  送信が完了しました。確認次第ご連絡いたします。
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </form>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-muted-foreground mb-4">
                オンラインでの面談をご希望の方は、以下のリンクから予約が可能です。
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://timerex.net/s/taiko.hiroaki_0864/5689a933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  オンライン面談を予約する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}