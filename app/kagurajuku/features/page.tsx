"use client"

import Image from 'next/image'
import { Layers, GitCommitHorizontal, Goal, Gamepad2, Users, Bot, Wrench, Home, Globe } from 'lucide-react'

const featureSections = [
  {
    category: "学ぶ内容",
    title: "分野を越えて、探求の旅へ",
    description: "神楽塾では、固定されたカリキュラムに縛られず、参加者一人ひとりの好奇心から学びが始まります。テクノロジーから芸術、科学、哲学まで、あらゆる分野を横断しながら、自分だけの知の地図を描いていきます。",
    image: "/images/bricolage.jpg",
    imageLeft: true,
    points: [
      {
        icon: Layers,
        title: "分野横断の学び",
        text: "テクノロジー、芸術、ゲーム、科学、哲学、運動、地域文化など、一見関係のないような分野を組み合わせ、新しい価値を創造します。"
      },
      {
        icon: GitCommitHorizontal,
        title: "段階に応じた設計",
        text: "「体験→習得→創造→探究」と、学びが自然に深まっていく段階的なプロセスを設計。初心者でも安心して参加し、専門家へと成長できます。"
      },
      {
        icon: Goal,
        title: "明確なゴール設定",
        text: "「未来の運動会」や「空神楽上演」など、プロジェクトベースの明確なゴールを設定。仲間と共に目標に向かう中で、実践的なスキルと協働の精神を育みます。"
      }
    ]
  },
  {
    category: "学ぶ方法",
    title: "遊びが学びになる仕掛け",
    description: "私たちは「学ぶ」とは「遊ぶ」ことの延長線上にあると考えています。神楽塾では、参加者が自律的に、そして楽しみながら学び続けられるためのユニークな仕掛けを用意しています。",
    image: "/images/odaka-juku.jpeg",
    imageLeft: false,
    points: [
      {
        icon: Gamepad2,
        title: "ゲーミフィケーション",
        text: "学習プロセスにクエスト、ポイント、バッジといったゲーム要素を導入。自分の成長を可視化し、モチベーションを維持しながら楽しく学べます。"
      },
      {
        icon: Users,
        title: "自律的な学習コミュニティ",
        text: "オランダのイエナプラン教育を参考に、年齢や専門分野の異なる人々が混ざり合い、教え合い、学び合うコミュニティを形成します。"
      },
      {
        icon: Bot,
        title: "生成AIと共に学ぶ",
        text: "生成AIは、単なるツールではありません。対話を通じて知識を探求し、創作のアイデアを広げ、時には協働するパートナーとして、学びを加速させます。"
      }
    ]
  },
  {
    category: "学びの環境",
    title: "創造性を刺激する空間",
    description: "学びは机の上だけで完結するものではありません。五感を使い、人と触れ合い、リラックスできる環境が、真の創造性を引き出します。",
    image: "/images/hanegi.jpg",
    imageLeft: true,
    points: [
      {
        icon: Wrench,
        title: "創作スペース「工房・道場」",
        text: "3Dプリンターやレーザーカッターなどのデジタル工作機械から、伝統的な工具まで。アイデアをすぐに形にできる工房を開放しています。"
      },
      {
        icon: Home,
        title: "対話が生まれる生活空間",
        text: "和の家をベースとした落ち着いた空間で、共に食事をし、語り合う。何気ない日常のやりとりから、新しいプロジェクトの種が生まれます。"
      },
      {
        icon: Globe,
        title: "世界に開かれた場",
        text: "地域住民の方はもちろん、国内外からの旅人や研究者など、多様な人々が訪れる開かれたコミュニティです。予期せぬ出会いが、あなたの世界を広げます。"
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              学びの特徴
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              神楽塾は、テクノロジー・芸術・自然・哲学・遊びなどの分野横断的な学びを、遊びの精神を核に据えて展開する教育プロジェクトです。年齢や専門分野を超えた多様な人々が集い、共に成長していくためのユニークな学習の仕組みがあります。
            </p>
          </div>

          <div className="space-y-20">
            {featureSections.map((section) => (
              <div key={section.title} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className={`relative w-full h-80 rounded-lg overflow-hidden shadow-xl ${section.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={`space-y-6 ${section.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-2">
                     <p className="text-sm font-semibold text-primary uppercase tracking-wider">{section.category}</p>
                     <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                       {section.title}
                     </h2>
                     <p className="text-gray-600 dark:text-gray-300">
                       {section.description}
                     </p>
                  </div>
                  <div className="space-y-4">
                    {section.points.map((point) => (
                      <div key={point.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          <point.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-50">{point.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}