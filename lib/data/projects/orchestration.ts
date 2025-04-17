export const orchestrationProject = {
  title: 'ドローンによる神楽探求PJ',
  heroImage: '/images/iwamikagura.webp',
  overview: '神楽は、ある方法に沿った動きをする運動ですが、ある人は踊っているのではない。舞っているのだ、というような表現を口にします。今のドローン含むロボットは踊ることが可能になりつつありますが、おそらく舞ってはいないでしょう。果たして舞うドローンは作ることができるでしょうか？そして人と共に舞うロボットは作ることができるでしょうか？このプロジェクトでは個体のドローンの運動の探求と共に、群知能/群制御技術の探求、そして人とロボットのインタラクションのあり方を探求し、人とロボットの新しい関係を伝統の下に模索します。',
  achievements: [
    {
      title: 'None',
      description: '-',
      date: '-',
      image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=800'
    },
    {
      title: 'None',
      description: '-',
      date: '-',
      image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=800'
    }
  ],
  targetAudience: [
    {
      type: 'ドローン技術のフロンティアに興味のある方',
      description: '群制御やインタラクションシステムの開発に取り組む'
    },
    {
      type: '群れによる踊りの表現に興味のある方',
      description: '群れがどのように振る舞うかを考える'
    },
    {
      type: '生物の運動や群れの振る舞いへ興味のある方',
      description: '生物あるいはまだ見ぬ生物の形がどのように群れを形成しするか、そして多様な生命がどのように共に運動するかに関心のある方'
    }
  ],
  subProjects: [
    {
      title: '群制御/群知能探求PJ',
      description: '群制御技術の研究と実装を試みます',
      image: '/images/boid.jpg'
    },
    {
      title: '群れの美術表現探求PJ',
      description: '群れを用いてどのような美術表現が可能かを探求します',
      image: '/images/boid-expression.jpg'
    },
    {
      title: '神楽探求PJ',
      description: '地域に伝わる神楽の動きとその精神を探求します',
      image: '/images/iwamikagura.webp'
    },
    {
      title: '人とドローンのインタラクションデザインPJ',
      description: '人とドローンの群れの美しいインタラクションを制作します',
      image: '/images/orchestration-drone.jpeg'
    }
  ],
  discordUrl: 'https://discord.gg/Q9yg7Pszxs',
  upcomingEvents: [
    {
      title: 'プロジェクト全体キックオフmtg',
      date: '2025年5月頃',
      location: '未定',
      description: '多様な参加者との祭りの始まり'
    }
  ]
} as const