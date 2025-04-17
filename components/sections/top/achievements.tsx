// Move from components/sections/achievements.tsx
"use client"

import { motion } from 'framer-motion'

export function Achievements() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeIn}
        >
          実績と提携機関
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg"
            {...fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-4">これまでの実績</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">●</span>
                <span>2023年12月 - 南相馬市寳蔵寺での実演</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">●</span>
                <span>2024年通期 - 各地域でのワークショップの開催</span>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg"
            {...fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-4">提携機関</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">■</span>
                <span>NextCommonsLab南相馬</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">■</span>
                <span>横瀬町しあわせ未来会議</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}