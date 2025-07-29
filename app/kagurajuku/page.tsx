"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

const concepts = [
  { name: "遊ぶ精神、楽しむ心", href: "/kagurajuku/about" },
  { name: "自己の再創造", href: "/kagurajuku/about" },
  { name: "『私』と『私たち』の幸せ", href: "/kagurajuku/about" },
];

const highlights = [
  "分野横断の学びの機会",
  "ゲーム感覚で進める学習",
  "創造性を刺激する物理的空間",
  "多様な人々との出会いと交流",
];

export default function KagurajukuHomePage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image 
            src="/images/kagurajuku.jpeg" 
            alt="神楽塾メインイメージ" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-50"
          />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter drop-shadow-md">
            未来は、遊びの中に。
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-sm">
            神楽塾は、テクノロジーと遊びの力で、自分と世界の未来を創造する学びのコミュニティです。
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/kagurajuku/join">今すぐ参加する</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="/kagurajuku/about">神楽塾とは？</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">神楽塾が大切にする3つのこと</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 md:text-lg">私たちの活動は、3つのシンプルなコンセプトに基づいています。</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {concepts.map((concept) => (
              <div key={concept.name} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{concept.name}</h3>
              </div>
            ))}
          </div>
           <div className="text-center mt-8">
              <Link href="/kagurajuku/about" className="text-primary hover:underline">
                コンセプトを詳しく見る <ArrowRight className="inline h-4 w-4"/>
              </Link>
            </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">学びの特徴</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">成長を加速させるユニークな仕組み</h2>
            <p className="text-gray-600 dark:text-gray-300 md:text-lg">年齢や専門分野に関係なく、誰もが楽しみながら成長できる環境がここにはあります。</p>
            <ul className="space-y-3 mt-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild>
                <Link href="/kagurajuku/features">学びの仕組みを詳しく</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
             <Image src="/images/odaka-fukko.jpg" alt="活動の様子" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">さあ、あなたも神楽塾へ</h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-600 dark:text-gray-300 md:text-lg">
            見学やワークショップへの参加、その他ご質問など、いつでもお待ちしています。お気軽にご連絡ください。
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/kagurajuku/join">参加方法を見る</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/kagurajuku/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
