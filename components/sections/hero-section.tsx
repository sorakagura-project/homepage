"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim"
import type { Engine, Container } from 'tsparticles-engine'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const particlesContainer = useRef<Container | null>(null)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container | null) => {
    if (container) {
      particlesContainer.current = container
    }
  }, [])

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const container = particlesContainer.current
    if (!container) return

    // Get click coordinates relative to the section
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Create new particles at click location
    container.particles.addParticle({ x, y }, {
      color: {
        value: ["#FFD700", "#FF6B6B", "#4A90E2"][Math.floor(Math.random() * 3)]
      },
      size: {
        value: { min: 2, max: 7 }
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: true,
        speed: 2,
        straight: false
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1
        }
      }
    })
  }, [])

  return (
    <section 
      className="relative h-[90vh] hero-pattern flex items-center justify-center overflow-hidden"
      onClick={handleClick}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#FFD700", "#FF6B6B", "#4A90E2"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 250,
            },
            opacity: {
              value: 0.7,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      <motion.div 
        className="container relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
            ひとりの夜空が、
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo mt-2">
            "わたしたち"の<br className="block sm:hidden" />未来へ
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          光るドローンの群れが紡ぐ、<br className="block sm:hidden" />わたしたちの未来の物語
        </p>
        <Button asChild size="lg" className="animate-float shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50 transition-shadow">
          <Link href="/about">
            プロジェクトについて
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}