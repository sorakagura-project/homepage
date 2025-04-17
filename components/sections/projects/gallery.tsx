"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { SubProject } from '@/lib/types/project'

interface ProjectGalleryProps {
  readonly projects: readonly SubProject[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">サブプロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 = 56.25% */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {project.description}
                    </p>
                    <Button asChild className="mt-auto">
                      <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}>
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}