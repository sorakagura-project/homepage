"use client"

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const programSteps = [
  {
    phase: "Phase 1: 体験と発見",
    title: "ワークショップに参加する",
    description: "まずは、私たちが開催する様々な体験型ワークショップにご参加ください。ドローンプログラミング、デジタルアート、ゲーム制作など、あなたの好奇心を刺激する入り口がここにあります。専門知識は不要です。楽しむ心だけお持ちください。",
    image: "/images/art_create.JPG",
  },
  {
    phase: "Phase 2: スキルの習得",
    title: "手法を学び、道具を使いこなす",
    description: "興味を持った分野の基本的なスキルと、その背景にある考え方を学びます。オンライン教材やメンターのサポートを活用し、自分のペースで着実に力をつけていくことができます。工房のデジタル工作機械なども自由に使えるようになります。",
    image: "/images/blender.jpg",
  },
  {
    phase: "Phase 3: 創造と共創",
    title: "自主制作・共同制作に挑戦する",
    description: "習得したスキルを活かして、個人またはチームで作品制作やプロジェクトに取り組みます。仲間とアイデアを出し合い、試行錯誤を繰り返す中で、創造する喜びを分かち合います。「未来の運動会」や「空神楽上演」といった大きな舞台も、このフェーズの目標です。",
    image: "/images/droneshowcompe.jpg",
  },
  {
    phase: "Phase 4: 探究と実装",
    title: "知を深め、社会と繋がる",
    description: "自らの問いを探究し、社会課題の解決に挑戦するフェーズです。研究開発、アート作品の発表、あるいは事業化など、あなたの情熱を社会に繋げるためのサポートを全力で行います。",
    image: "/images/NCLminamisoma.jpeg",
  },
]

export default function ProgramPage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              学習プログラム
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              神楽塾の学びは、一本の決まった道ではありません。あなたの興味と成長に合わせて進化していく、柔軟なステップで構成されています。
            </p>
          </div>

          <div className="relative">
            {/* 縦のライン */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>

            <div className="space-y-16">
              {programSteps.map((step, index) => (
                <div key={step.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative">
                  <div className={`md:col-start-${index % 2 === 0 ? 1 : 2} md:row-start-1`}>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                       <Image
                         src={step.image}
                         alt={step.title}
                         layout="fill"
                         objectFit="cover"
                       />
                    </div>
                  </div>
                  <div className={`space-y-3 md:col-start-${index % 2 === 0 ? 2 : 1} md:row-start-1`}>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">{step.phase}</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}