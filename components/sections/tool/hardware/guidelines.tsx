"use client"

import { Card } from '@/components/ui/card'

export function HardwareGuidelines() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">空神楽プロジェクトのハードウェアの<br className="block sm:hidden" />展開指針</h2>

          <Card className="p-8 bg-gradient-to-br from-background/90 to-background/70 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo mb-4">
                境界を和らげ、協調的繁栄を促すもの
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/images/intermediate-technology.jpeg"
                    alt="人間と人間"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">人間と人間の境界</h3>
                  <p className="text-muted-foreground">
                    SNSのように、人が”言葉”や”自分”に閉じこもり、言い争わないように。無視される声が現れるように。
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/images/nature-technology.jpeg"
                    alt="人間とテクノロジーと自然"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">人間とテクノロジーと自然の境界</h3>
                  <p className="text-muted-foreground">
                    能力を高め敵対、支配するだけではなく、共に世界の中を生きて、喜びや苦しみを交わす複雑さを繋ぎ包み込むように。
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/images/traditional-drone.jpeg"
                    alt="技術と芸術と生活"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">技術と芸術と生活の境界</h3>
                  <p className="text-muted-foreground">
                    用と美、ハレとケが循環するような、かつての民藝、技術の起源”テクネー”を目指して。
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
