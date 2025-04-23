"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function PartnerOrganizations() {
  const partners = [
    {
      name: "NextCommonsLab南相馬",
      image: "/images/NCLminamisoma.jpeg",
      url: "https://ncl-minamisoma.jp/"
    },
    {
      name: "横瀬町しあわせ未来会議",
      image: "/images/siatuku.jpeg",
      url: "https://shiatsuku.com/"
    },
    {
      name: "Waiting",
      image: "",
      url: "/collab#contact",
      isWaiting: true
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">協力機関</h2>
          <p className="text-lg text-muted-foreground">
            共に未来を創造するパートナー
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block transition-transform hover:scale-105 ${partner.isWaiting ? 'cursor-default' : ''}`}
              >
                <Card className="overflow-hidden w-32 h-32 flex items-center justify-center p-4">
                  {partner.isWaiting ? (
                    <span className="text-2xl font-bold text-primary">Waiting</span>
                  ) : (
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
