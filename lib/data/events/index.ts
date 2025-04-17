export const eventsData = {
  'sakura-night': {
    title: '桜夜空物語',
    heroImage: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2000',
    overview: {
      description: '満開の桜と光のドローンが織りなす、春の夜の物語。上野の夜空に咲く、新しい桜の形を体験してください。',
      highlights: [
        '100機のドローンによる立体的な演出',
        '桜をモチーフにした光の演出',
        '伝統的な和楽器の生演奏とのコラボレーション'
      ]
    },
    creators: {
      director: {
        name: '山田太郎',
        role: '演出監督',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
        description: '数々の光のアートイベントを手がけてきたクリエイティブディレクター'
      },
      team: [
        {
          name: '佐藤美咲',
          role: '音楽監督',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400'
        },
        {
          name: '田中健一',
          role: 'テクニカルディレクター',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
        }
      ]
    },
    details: {
      date: '2024年4月5日(金)',
      time: '19:30〜20:30',
      location: '上野恩賜公園',
      capacity: '500名',
      price: '無料',
      access: [
        'JR上野駅公園口から徒歩5分',
        '東京メトロ上野駅から徒歩7分'
      ],
      notes: [
        '荒天の場合は中止となります',
        '当日16時に開催可否を判断し、SNSにてお知らせします',
        '観覧エリアには限りがあります'
      ]
    },
    volunteer: {
      description: '一緒にイベントを作り上げる仲間を募集しています。運営スタッフとして参加して、新しい体験の創造に関わってみませんか？',
      roles: [
        '会場設営・撤去スタッフ',
        '観客誘導スタッフ',
        '受付スタッフ',
        '記録撮影スタッフ'
      ],
      benefits: [
        'スタッフTシャツプレゼント',
        '特別観覧エリアでの鑑賞',
        '終了後の打ち上げ参加'
      ],
      chatUrl: 'https://line.me/ti/g2/XXXXXXXX'
    }
  }
} as const

export type EventId = keyof typeof eventsData