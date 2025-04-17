"use client"

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim"
import type { Engine } from 'tsparticles-engine'
import { Card } from '@/components/ui/card'

interface AnimationData {
  readonly particleCount: number
  readonly duration: number
  readonly dataUrl: string
}

interface StoryAnimationProps {
  readonly animationData: AnimationData
}

export function StoryAnimation({ animationData }: StoryAnimationProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="aspect-video relative bg-black">
              <Particles
                id="story-particles"
                init={particlesInit}
                options={{
                  fullScreen: { enable: false },
                  particles: {
                    color: { value: "#ffffff" },
                    move: {
                      enable: true,
                      speed: 2
                    },
                    number: {
                      value: animationData.particleCount
                    },
                    size: {
                      value: 3
                    }
                  }
                }}
                className="absolute inset-0"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}