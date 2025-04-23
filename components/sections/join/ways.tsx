import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare, Users, Calendar, Building2, User } from 'lucide-react'
import Link from 'next/link'
import { JoinForm } from './form'

export function JoinWays() {
  const ways = [
    {
      title: "実演イベントを訪れる",
      description: "時折開催される実演イベントに参加して、プロジェクトの雰囲気を体験できます。会場にいる担当者と話しながら、関わり方など相談ができます。",
      icon: Calendar,
      action: {
        text: "イベントを見る",
        href: "/enjoy/watch",
        external: false
      },
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
    },
    {
      title: "拠点を訪れる",
      description: "各地の拠点では、メンバーが日々活動しています。見学や体験も歓迎です。学びや創作に関わりながら自分の興味、関わりを相談できます。",
      icon: Building2,
      action: {
        text: "拠点を探す",
        href: "/enjoy/travel",
        external: false
      },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
    },
    {
      title: "SNSよりDM",
      description: "気軽に参加できるコミュニティです。プロジェクトの最新情報や、メンバー同士の交流を楽しめます。InstagramやDiscordより気軽にご連絡ください。",
      icon: Users,
      action: {
        text: "チャットに参加",
        href: "/#SNS",
        external: true
      },
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800"
    },
    {
      title: "オンラインカジュアル面談",
      description: "オンライン上で、気軽に担当者と会話ができます。プロジェクトの基本的説明や自分の関われる役割など聞きたいこと何でも話せますので、気軽にご予約ください。",
      icon: Users,
      action: {
        text: "リンクより予約",
        href: "https://timerex.net/s/taiko.hiroaki_0864/5689a933",
        external: true
      },
      image: "https://images.unsplash.com/photo-1586980368323-8ce5db4c85ce?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    
  ]

  return (
    <>
      <section id="apply" className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">応募/相談方法</h2>
            <p className="text-lg text-muted-foreground">
              自分に合った方法から、<br className="block sm:hidden" />貢献してみたい興味や役割など<br className="block sm:hidden" />ご提案/相談ください。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <img
                      src={way.image}
                      alt={way.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <way.icon className="absolute bottom-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                    <p className="text-muted-foreground mb-6">{way.description}</p>
                    <Button asChild>
                      {way.action.external ? (
                        <a
                          href={way.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {way.action.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <Link href={way.action.href}>
                          {way.action.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <JoinForm />
      <section className="py-12 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="https://note.com/bundleofborder/n/n93be65bb9195" className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                プロジェクト発起人の紹介
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}