"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileDown } from 'lucide-react'

interface DownloadInfo {
  readonly title: string
  readonly description: string
  readonly fileSize: string
  readonly format: string
  readonly url: string
}

interface StoryDownloadProps {
  readonly download: DownloadInfo
}

export function StoryDownload({ download }: StoryDownloadProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileDown className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">{download.title}</h2>
                <p className="text-muted-foreground">{download.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span>ファイルサイズ: {download.fileSize}</span>
              <span>形式: {download.format}</span>
            </div>

            <Button asChild className="w-full">
              <a href={download.url} download>
                <Download className="mr-2 h-4 w-4" />
                ダウンロード
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}