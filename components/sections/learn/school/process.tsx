"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Eye, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'

export function SchoolProcess() {
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

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">
                  少しでも興味が湧いた方へ
                </h3>
                <p className="text-lg mb-2">
                  まずは気軽にご相談ください。
                </p>
                <p className="text-muted-foreground">
                  お子様の興味や適性、ご家族の希望に合わせて、
                  最適な学習プランをご提案させていただきます。
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}