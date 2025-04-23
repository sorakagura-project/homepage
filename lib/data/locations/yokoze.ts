import type { LocationData } from '@/lib/types/location'

export const yokozeLocation: LocationData = {
  name: '横瀬町-秩父郡',
  heroImage: '/images/yokoze.jpg',
  overview: '埼玉県横瀬町は人と食が温かくつながるコミュニティスペースや、楽しく足を踏み入れられる山、川、棚田の豊かな自然のもとで、日本一チャレンジする町として関わる人々が日々豊かな挑戦を行っている。自然と人の営みが複雑に織り混ざるその環境の中で、新たな人の生活の姿を編み出している。',
  base: {
    name: 'KaguLab(準備中)',
    description: 'オープンアンドフレンドリーな街のコミュニティスペースArea898を中心に、科学や創作、自然体験など豊かな体験が交錯する温かい環境',
    image: '/images/kagurajuku.jpeg',
    features: [
      'コワーキングエリア-Area898',
      '寺坂棚田/ウォーターパーク',
      'クリエイティブスペースTATELab',
      '新しい学びの場-NAZELAB'
    ]
  },
  experiences: [
    {
      title: "-",
      description: "-",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800"
    }
  ],
  folklore: {
    title: "地域に伝わる伝承文化",
    description: "武甲山はじめ山々に囲まれた地域で育まれた人と自然の間の暮らしを伝える行事",
    stories: [
      {
        title: "秩父夜祭",
        description: "京都の祇園祭、飛騨の高山祭とともに「日本三大曳山祭」に数えられ、絢爛豪華な笠鉾や屋台が曳行される。",
        image: "/images/titibumaturi.jpg"
      },
      {
        title: "龍勢祭",
        description: "椋神社秋の大祭に奉納する神事として、土地の古老より構造や火薬の取り扱い方などを伝承し製造したロケットを打ち上げる。",
        image: "/images/ryuseimaturi.jpg"
      }
    ]
  },
  access: {
    address: '埼玉県秩父郡横瀬町',
    transportation: [
      '西武秩父線「横瀬駅」から徒歩10分',
      '関越自動車道「花園IC」から車で40分'
    ],
    parking: '専用駐車場あり',
    googleMapsUrl: 'https://maps.app.goo.gl/iRgFY1dSZPKvobtc8'
  },
  relatedProjects: [
    {
      title: "地域で交わるわたしたちの神話再編PJ",
      description: "豊かな自然環境と穏やかな時間、温かい人が交わる横瀬で、自分たちが何を願い、何を創り出していきたいのかを一緒に描いていきます。",
      image: "/images/orochi.jpg"
    }
  ]
}