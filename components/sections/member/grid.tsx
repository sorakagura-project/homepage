"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import clsx from 'clsx'

type Region = 'ALL' | '小高' | '横瀬' | '東京' | 'オンライン'

interface Member {
  name: string
  role: string
  locations: Region[]   
  interests: string[]
  image: string
}

const members: Member[] = [
  {
    name: "太向弘明",
    role: "ディレクター",
    locations: ["ALL"],
    interests: ["宇宙", "生命"],
    image: "/images/member/taiko.jpg"
  }
]

const regions: Region[] = ['ALL', '小高', '横瀬', '東京', 'オンライン']

export function MemberGrid() {
  const [selectedRegion, setSelectedRegion] = useState<Region>('ALL')

  const filteredMembers = members.filter((member) => {
    if (selectedRegion === 'ALL') return true
    return member.locations.includes(selectedRegion) || member.locations.includes('ALL')
  })

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        {/* フィルター */}
        <div className="flex justify-center gap-8 mb-12">
          {regions.map((region) => (
            <div
              key={region}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedRegion(region)}
            >
              <span
                className={clsx(
                  "text-lg font-semibold transition-colors",
                  selectedRegion === region ? "text-primary" : "text-muted-foreground",
                  "hover:text-primary"
                )}
              >
                {region}
              </span>
              {/* 選択されているときだけ下にバー */}
              <div
                className={clsx(
                  "mt-2 h-1 w-6 rounded-full transition-all",
                  selectedRegion === region ? "bg-primary" : "bg-transparent"
                )}
              />
            </div>
          ))}
        </div>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{member.role}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    よくいる場所: {member.locations.join(", ")}
                  </div>
                  <div className="flex flex-wrap gap-2 text-muted-foreground">
                    好きなもの{member.interests.map((interest) => (
                      <span
                        key={interest}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}