"use client"

import Image from 'next/image'

const environments = [
  {
    name: "工房・道場",
    description: "3Dプリンター、レーザーカッター、CNCなど最新のデジタル工作機械から、木工・金工の伝統的な道具まで。あなたのアイデアをすぐに形にできる、創造のための空間です。ここは、テクノロジーと手仕事が出会う実験場でもあります。",
    image: "/images/coworking.jpeg",
  },
  {
    name: "生活・対話空間",
    description: "古民家を改装した、落ち着きのある和の空間。畳の上でリラックスしたり、縁側で語り合ったり。共に食事を作るキッチンやダイニングも併設しており、日々の暮らしの中から自然なコミュニケーションと新たな協働が生まれます。",
    image: "/images/hanegi.jpg",
  },
  {
    name: "交流のハブ",
    description: "神楽塾は、地域に根ざしながらも、世界に開かれた場所です。国内外からの旅行者、研究者、アーティストが気軽に立ち寄り、滞在します。予期せぬ出会いや多様な価値観との交流が、あなたの視野を広げ、新しいインスピレーションを与えてくれます。",
    image: "/images/global-exchange.webp",
  },
]

export default function EnvironmentPage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              学習環境
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              最高の学びは、最高の環境から。神楽塾は、あなたの創造性を最大限に引き出すための、ユニークで心地よい空間を提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {environments.map((env) => (
              <div key={env.name} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group">
                <div className="relative w-full h-64">
                  <Image
                    src={env.image}
                    alt={env.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{env.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {env.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}