"use client"

import Link from "next/link"
import dynamic from 'next/dynamic';

const NoaVisualization = dynamic(() => import('./NoaVisualization'), { ssr: false });

export function Linktonoa() {{
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background/95">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-4">
          この舞は、noaという森の一節
        </h2>
        <p className="text-lg text-muted-foreground">
            遊び心と計算技術で描く、万物の共生
          </p>
        <NoaVisualization />
        <p className="max-w-3xl mx-auto text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          この空神楽プロジェクトは、計算技術と遊びや芸術の力を通じて、現実と虚構の間に橋を架け、人間、人工物、自然物が共に生きる未来をデザインする、私たちの「noa」という活動の一部です。
        </p>
        <div className="mt-8">
          <Link
            href={"https://noasophic.netlify.app"}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            noaについて詳しく知る
          </Link>
        </div>
      </div>
    </section>
  )
}}
