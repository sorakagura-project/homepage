"use client"

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const steps = [
  { name: "Step 1: 説明会・見学", description: "まずはオンライン説明会や現地見学にご参加ください。神楽塾の雰囲気を感じ、直接質問できる機会です。" },
  { name: "Step 2: 体験ワークショップ", description: "興味のあるワークショップに一度ご参加いただき、学びのスタイルがご自身に合うかをお確かめください。" },
  { name: "Step 3: メンバーシップ登録", description: "継続的な参加をご希望の場合は、メンバーシップ登録をお願いします。手続きはオンラインで完結します。" },
  { name: "Step 4: ようこそ神楽塾へ！", description: "登録完了後、あなたも神楽塾の一員です。仲間と共に、新しい学びの旅を始めましょう！" },
];

const faqs = [
  { question: "年齢や職業に制限はありますか？", answer: "一切ありません。中学生から80代の方まで、プロのエンジニアから芸術家、主婦、学生など、多様な方々が参加しています。" },
  { question: "特定のスキルや知識は必要ですか？", answer: "不要です。「何かを学びたい」「面白いことをしたい」という好奇心さえあれば、どなたでも大歓迎です。" },
  { question: "地方や海外からでも参加できますか？", answer: "はい、可能です。オンラインでの参加を基本としつつ、短期滞在が可能な宿泊施設も用意しています。" },
  { question: "費用はどのくらいかかりますか？", answer: "参加形態に応じて異なります。詳細はお問い合わせください。非営利で運営しており、参加しやすい料金体系を目指しています。" },
];

export default function JoinPage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              参加方法
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              神楽塾への扉は、すべての人に開かれています。あなたも、私たちと共に未来を創造する旅に出てみませんか？
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">参加までの流れ</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && <div className="w-px h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-50">{step.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">よくあるご質問 (FAQ)</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-gray-50">{faq.question}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/kagurajuku/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              説明会・見学に申し込む
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}