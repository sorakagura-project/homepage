"use client"

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SupportFAQ() {
  const faqs = [
    {
      question: "支援金は何に使われますか？",
      answer: "支援金は主に以下の用途に使用させていただきます：\n・ドローンの調達と維持管理\n・技術開発と研究\n・イベントの運営\n・コミュニティの運営\n・教育プログラムの開発"
    },
    {
      question: "支援の期間はどのくらいですか？",
      answer: "支援は1回限りの寄付と、定期的な支援（月額/年額）のどちらも可能です。定期支援の場合、いつでも解約が可能です。"
    },
    {
      question: "領収書は発行されますか？",
      answer: "はい、ご希望の方には領収書を発行いたします。支援完了後、メールにてご案内いたします。"
    },
    {
      question: "特典はいつ届きますか？",
      answer: "支援プランに応じた特典は、支援確認後1ヶ月以内にお届けいたします。デジタルコンテンツは支援確認後、すぐにアクセス可能となります。"
    },
    {
      question: "法人からの支援は可能ですか？",
      answer: "はい、法人からの支援も歓迎しております。法人向けの特別なプランもご用意しておりますので、お問い合わせください。"
    }
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
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer.split('\n').map((line, i) => (
                    <p key={i} className="text-muted-foreground">{line}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}