"use client"

import { motion } from 'framer-motion'

interface ProjectOverviewProps {
  overview: string
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">プロジェクト概要</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {overview}
          </p>
        </motion.div>
      </div>
    </section>
  )
}