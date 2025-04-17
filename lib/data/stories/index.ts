export interface Story {
  readonly title: string
  readonly description: string
  readonly animationData: {
    readonly particleCount: number
    readonly duration: number
    readonly dataUrl: string
  }
  readonly creators: {
    readonly director: {
      readonly name: string
      readonly role: string
      readonly image: string
      readonly description: string
    }
    readonly team: readonly {
      readonly name: string
      readonly role: string
      readonly image: string
    }[]
  }
  readonly video: {
    readonly title: string
    readonly description: string
    readonly youtubeId: string
  }
  readonly download: {
    readonly title: string
    readonly description: string
    readonly fileSize: string
    readonly format: string
    readonly url: string
  }
}

export const storiesData = {
  'sakura': {
    title: '桜舞う夜空',
    description: '春の夜に舞い散る桜の様子を表現。伝統的な日本の美意識と現代のテクノロジーが融合した、幻想的な光の物語。',
    animationData: {
      particleCount: 100,
      duration: 60,
      dataUrl: '/animations/sakura.json'
    },
    creators: {
      director: {
        name: '山田花子',
        role: 'クリエイティブディレクター',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
        description: '伝統的な日本の舞踊とデジタルアートを組み合わせた作品を多数手がける'
      },
      team: [
        {
          name: '佐藤一郎',
          role: 'テクニカルディレクター',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400'
        },
        {
          name: '鈴木美咲',
          role: 'アニメーションデザイナー',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
        }
      ]
    },
    video: {
      title: '桜舞う夜空 - 実演映像',
      description: '2024年3月、上野公園での実演の様子',
      youtubeId: 'dQw4w9WgXcQ'
    },
    download: {
      title: 'アニメーションデータ',
      description: '空神楽Studioで再生可能な形式でダウンロードできます。',
      fileSize: '2.4MB',
      format: '.skgr',
      url: '/downloads/sakura.skgr'
    }
  }
} as const

export type StoryId = keyof typeof storiesData