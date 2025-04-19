"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Eye, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { sendContactForm } from '@/lib/send-contact-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SchoolProcess() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const steps = [
    {
      title: "実演鑑賞",
      description: "空神楽の実演を鑑賞し、美術やテクノロジーの迫力を体感します。",
      icon: Eye,
      color: "from-deepRed to-gold"
    },
    {
      title: "ワークショップ体験",
      description: "1日限定のワークショップに参加し、学ぶ面白さやモチベーションを発見します。",
      icon: BookOpen,
      color: "from-gold to-youngGrass"
    },
    {
      title: "拠点訪問/体験入学",
      description: "拠点での実際の学びの様子に触れて、学べるものや周囲の環境について理解を深めます。",
      icon: GraduationCap,
      color: "from-youngGrass to-indigo"
    }
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formElement = event.currentTarget
    
    const formData = new FormData(event.currentTarget)
    
    try {
      await sendContactForm({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: `
申し込み内容: ${formData.get('inquiry_type')}

お名前: ${formData.get('name')}
メールアドレス: ${formData.get('email')}
年齢: ${formData.get('age')}

その他メッセージ:
${formData.get('message')}
        `,
        formType: 'school'
      })
      setSubmitStatus('success')
      formElement.reset()
    } catch (error) {
      console.error('Failed to send form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">入塾前のオプション</h2>

          <div className="relative">
            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[15px] top-[28px] bottom-[-12px] w-[2px] bg-border" />
                  )}
                  
                  {/* Step Content */}
                  <Card className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Final Message and Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  少しでも興味が湧いた方へ
                </h3>
                <p className="text-lg mb-8 text-center text-muted-foreground">
                  お子様の興味や適性、ご家族の希望に合わせて、<br />
                  最適な学習プランをご提案させていただきます。
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry_type">申し込み内容</Label>
                    <Select name="inquiry_type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="申し込み内容を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">入塾の申し込み</SelectItem>
                        <SelectItem value="trial">体験入学</SelectItem>
                        <SelectItem value="visit">拠点訪問</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">年齢</Label>
                    <Input id="age" name="age" type="number" min="0" max="120" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">その他メッセージ</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="ご質問やご要望などございましたらお書きください"
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
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}