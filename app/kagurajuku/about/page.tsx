"use client"

import Image from 'next/image'

const concepts = [
  {
    image: "/images/asobukouhou.jpg",
    title: "1. 遊ぶ精神、楽しむ心",
    description: "知識やスキルを詰め込むのではなく、自らの好奇心や遊び心を源泉とした学びを実践します。楽しむことが、最も効果的な成長のエンジンであると私たちは信じています。ここでは、誰もがアーティストであり、発明家です。",
    imageLeft: true,
  },
  {
    image: "/images/nature-technology.jpeg",
    title: "2. 自己の再創造",
    description: "テクノロジーが進化し、自然環境が変化する現代において、自分自身をどう位置づけ、どう表現するか。ドローンやAIなどの最先端技術と、豊かな自然との対話を通じて、新しい自己を創造していくプロセスを支援します。",
    imageLeft: false,
  },
  {
    image: "/images/Enlighted-locals.jpg",
    title: "3. 『私』と『私たち』の幸せ",
    description: "個人の成功や幸福の追求だけではなく、コミュニティや社会全体といった『私たち』の幸せをどう実現していくかを探求します。多様な背景を持つ仲間との共創と協働を通じて、持続可能な未来をデザインする力を育みます。",
    imageLeft: true,
  },
]

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              神楽塾のコンセプト
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              神楽塾は、単なる知識の伝達の場ではありません。変化の激しい時代を生き抜くための、3つの核心的なコンセプトに基づいています。
            </p>
          </div>

          <div className="space-y-16">
            {concepts.map((concept) => (
              <div 
                key={concept.title} 
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
              >
                <div className={`relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg ${concept.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={concept.image}
                    alt={concept.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className={`space-y-3 ${concept.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                    {concept.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                    {concept.description}
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
