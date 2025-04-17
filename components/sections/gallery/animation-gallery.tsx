"use client"

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim"
import type { Engine } from 'tsparticles-engine'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Upload, Play, PlusCircle } from 'lucide-react'

type AnimationData = {
  id: string
  title: string
  description: string
  tags: string[]
  dataPath?: string
}

export function AnimationGallery() {
  const [loadedData, setLoadedData] = useState<Record<string, number[][]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)

  const animations: AnimationData[] = [
    {
      id: "waiting1",
      title: "Waiting for your work",
      description: "あなたの作品をお待ちしています",
      tags: [],
    },
    {
      id: "waiting2",
      title: "Waiting for your work",
      description: "あなたの作品をお待ちしています",
      tags: [],
    },
    {
      id: "waiting3",
      title: "Waiting for your work",
      description: "あなたの作品をお待ちしています",
      tags: [],
    }
  ]

  // アニメーションを3つずつのグループに分割
  const animationRows = animations.reduce((acc, curr, i) => {
    const rowIndex = Math.floor(i / 3)
    if (!acc[rowIndex]) acc[rowIndex] = []
    acc[rowIndex].push(curr)
    return acc
  }, [] as AnimationData[][])

  useEffect(() => {
    animations.forEach(animation => {
      if (animation.dataPath) {
        fetch(animation.dataPath)
          .then(response => response.text())
          .then(text => {
            const rows = text.split('\n')
            const data = rows.map(row => 
              row.split(',').map(Number)
            ).filter(row => row.length === 2 && !row.some(isNaN))
            setLoadedData(prev => ({ ...prev, [animation.id]: data }))
          })
          .catch(error => console.error(`Error loading ${animation.dataPath}:`, error))
      }
    })
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const file = formData.get('animation-data') as File
      
      // ファイルの検証
      if (!file.name.endsWith('.csv')) {
        throw new Error('CSVファイルのみアップロード可能です')
      }

      // ファイルの内容を検証
      const text = await file.text()
      const rows = text.split('\n')
      const data = rows.map(row => row.split(',').map(Number))
      const isValid = data.every(row => row.length === 2 && !row.some(isNaN))
      
      if (!isValid) {
        throw new Error('無効なデータ形式です。各行は2つの数値（x,y座標）である必要があります')
      }

      // TODO: 実際のアップロード処理をここに実装
      // 成功したら以下のようなメッセージを表示
      alert('アニメーションデータが正常にアップロードされました')
      setShowSubmissionForm(false)
      
    } catch (error) {
      alert(error instanceof Error ? error.message : '提出中にエラーが発生しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold via-deepRed to-indigo">
            ストーリーギャラリー
          </span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          光の粒子が描く、美しい物語の数々
        </p>

        <div className="space-y-8">
          {animationRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIndex * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {row.map((animation, index) => (
                <motion.div
                  key={animation.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video relative bg-black">
                      {animation.dataPath ? (
                        loadedData[animation.id] ? (
                          <Particles
                            id={`tsparticles-${animation.id}`}
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
                                  value: loadedData[animation.id].length
                                },
                                size: {
                                  value: 3
                                },
                                position: {
                                  x: loadedData[animation.id].map(p => p[0]),
                                  y: loadedData[animation.id].map(p => p[1])
                                }
                              }
                            }}
                            className="absolute inset-0"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            Loading...
                          </div>
                        )
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          Waiting for your work
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{animation.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{animation.description}</p>
                      {animation.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {animation.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm font-serif text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* アニメーション提出セクション */}
        <div className="mt-12">
          {!showSubmissionForm ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Button
                onClick={() => setShowSubmissionForm(true)}
                variant="outline"
                className="gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                アニメーションを投稿
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input
                      id="title"
                      name="title"
                      required
                      placeholder="作品のタイトルを入力してください"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">説明</Label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      placeholder="作品の説明や制作意図を入力してください"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="animation-data">アニメーションデータ（CSV）</Label>
                    <Input
                      id="animation-data"
                      name="animation-data"
                      type="file"
                      accept=".csv"
                      required
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      CSVファイル形式: 各行に「x座標,y座標」の形式でデータを記述してください
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      {isSubmitting ? '送信中...' : '送信する'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowSubmissionForm(false)}
                      className="flex-1"
                    >
                      キャンセル
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}