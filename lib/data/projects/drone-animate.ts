import { LINKS } from '@/lib/links'

export const droneAnimateProject = {
  title: 'ドローンに魂を吹き込むプロジェクト',
  heroImage: '/images/animated-drone.jpg',
  overview: 'ドローンが仕事道具でも戦争道具でもなく、私たちと世界を共に生きる仲間として存在できるように、形や息吹を吹き込みます',
  achievements: [
    {
      title: 'None',
      description: '-',
      date: '-',
      image: 'https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?q=80&w=3148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'None',
      description: '-',
      date: '-',
      image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  targetAudience: [
    {
      type: 'ロボットデザインに興味のある方',
      description: '生活、自然と調和するドローンのデザインに取り組む'
    },
    {
      type: '人工知能/感情/生命に興味のある方',
      description: '心/魂とは何か、ロボットがどのように心/魂をもつかに取り組む'
    },
    {
      type: '工藝の発展に興味のある方',
      description: '現代のテクノロジーの新たな進化に工藝の技で取り組む'
    }
  ],
  subProjects: [
    {
      title: '心がある/感じるドローンの開発',
      description: '心があるor感じるロボットはどのように作れるかを物の設計やソフトウェアの設計など多様な方法で研究、開発します',
      image: '/images/mind-roboto.jpeg'
    },
    {
      title: 'ドローンのボディのダイバーシティデザイン',
      description: '3Dプリンターや生成AIを用いて、一つ一つのドローンに個性ある体を与えるプロジェクトです',
      image: '/images/animated-drone.jpg'
    },
    {
      title: '伝統工芸×ドローン',
      description: '地域の風土の中で育まれた技術により、ドローンをその土地で生きる存在へと生まれ変わらせます',
      image: '/images/traditional-drone.jpeg'
    }
  ],
  discordUrl: LINKS.discord,
  upcomingEvents: [
    {
      title: 'プロジェクト全体キックオフmtg',
      date: '2025年5月頃',
      location: '未定',
      description: '多様な参加者との祭りの始まり'
    }
  ]
} as const