"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Star, Sparkles } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function SupportOptions() {
  const supportTiers = [
    {
      title: "光の守り手",
      price: "3,000",
      description: "プロジェクトの基盤を支える、大切な支援者として",
      features: [
        "お名前をウェブサイトに掲載",
        "メールニュースレターの購読",
        "限定コミュニティへの参加",
        "実演イベントへの優先案内"
      ],
      icon: Heart,
      priceId: "price_guardian"
    },
    {
      title: "星の導き手",
      price: "10,000",
      description: "より深くプロジェクトに関わり、共に成長する",
      features: [
        "光の守り手の特典すべて",
        "オリジナルグッズの進呈",
        "創作過程の見学機会",
        "メンバーとの交流会への参加",
        "実演イベントの特別観覧エリア"
      ],
      icon: Star,
      priceId: "price_guide"
    },
    {
      title: "天空の創造者",
      price: "30,000",
      description: "プロジェクトの重要なパートナーとして",
      features: [
        "星の導き手の特典すべて",
        "創作への参加機会",
        "技術指導セッション",
        "特別イベントへの招待",
        "クレジットへの掲載"
      ],
      icon: Sparkles,
      priceId: "price_creator"
    }
  ]

  const handleSupport = async (priceId: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        })

        if (error) {
          console.error('Error:', error)
        }
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">支援プラン</h2>
          <p className="text-lg text-muted-foreground">
            あなたに合った支援方法をお選びください
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <tier.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">¥{tier.price}</p>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  <h4 className="font-semibold">特典:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => handleSupport(tier.priceId)}
                  disabled
                >
                  準備中
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}