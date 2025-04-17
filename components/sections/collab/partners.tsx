"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Building2, Landmark, BookTemplate as Temple, Heart, GraduationCap } from 'lucide-react'

export function CollabPartners() {
  const partners = [
    {
      type: "企業の方へ",
      icon: Building2,
      description: "テクノロジーの大きな進展とそれに伴う労働、生活、価値観の大きな変容に伴い、従来の働き方や開発、販売の形に大きな転換と新たな視点が必要とされていると感じます。わたしたちは、企業が世界に本当に価値のある財を生み出すために多様な手段、テクノロジーにより協力します。をテクノロジーと文化の新しい可能性を追求します。",
      weOffer: [
        "技術やサービスの実験場の提供",
        "哲学者/美学者による企業のビジョン、パーパスに対するコンサルティング",
        "アート×テクノロジーの表現手法",
        "若手人材の育成支援",
        "神楽の体験を通じた社員の連帯の構築研修",
        "地域貢献/文化創出を通じたCSRアピール"
      ],
      weSeek: [
        "商品・サービスのプロモーション協力",
        "技術開発パートナーシップ",
        "社員研修・ワークショップの実施",
        "文化事業の共同運営",
        "スポンサーシップ"
      ]
    },
    {
      type: "地方自治体/地域創生団体の方へ",
      icon: Landmark,
      description: "私たちは地域において人は、人との交わり、自然との交わり、歴史、文化との交わりなど様々な交わりを豊かに取り戻し、ゆっくりとした時間の中で真に自分らしさを形成することで人生を豊かに生きていけると考えています。都市と地域の新たな循環を再び形成し、未来に向け、そして世界にも通ずる地域が育んできた伝統文化を、私たちのもつ保守と革新のための技術と共に主体的に協働してくださる地域との連携を待っています。",
      weOffer: [
        "地域資源の再発見と活用提案",
        "文化体験プログラムの開発",
        "若者の地域参画促進",
        "観光コンテンツの創出"
      ],
      weSeek: [
        "活動拠点の提供・開発",
        "空神楽実演環境の協力",
        "住民への理解、協力の呼びかけ",
        "地域活性化プロジェクトの協働"
      ]
    },
    {
      type: "寺社仏閣の方へ",
      icon: Temple,
      description: "寺社仏閣は存続の危機に直面していると聞きます。世代間の分断、都市と地域の分断、伝統的価値観との分断などにより、人々の愛着が離れています。しかし、みなさんがもつ価値は果たして現代で無用なのでしょうか。わたしはむしろ真逆と考えます。経済はより一層人々の私利私欲の追求を強め、遺伝編集技術やAIなど、世界を動かす力をますます強める様々な技術が、向かう先が不透明なまま増殖する貨幣と結びつき、人の死の不安を不誠実に隠す方向へ進んでいます。技術の発展によってあらゆる物を創造、制御できるようになり、理想的なあ世界を作ることができるという人類が築いてきた考えは様々な脅威によって限界を迎え、わたしたちの向かう道筋を照らす指針を求めています。みなさんのもつ物、技、知とわたしたちのもつ世界の美しい循環と生物の繁栄を生むための技、芸、知と共に、現代で新たな役割を果たせることを願っています。",
      weOffer: [
        "伝統に紐づいた空神楽の実演",
        "若年層や外国籍の方への伝統文化発信",
        "教えの学びの輪を広げるイベントの構築",
        "ブロックチェーン技術を用いた新たな存続システムの構築"
      ],
      weSeek: [
        "境内等の土地を利用しての空神楽の実演",
        "伝承される教えとわたしたちの技術、知をもちよっての対話/共創",
        "精神文化の継承方法の探求",
        "現代での学びのプログラムの構築"
      ]
    },
    {
      type: "教育機関の方へ",
      icon: GraduationCap,
      description: "AIの登場と共に、学び方はもちろん、若者の未来のあり方や学ぶ目標、そして教師の役割含めて大きく揺らいでいます。わたしたちは生成AIを用いた教育のあり方を模索していると同時に、その向かう先の探求目標を体験を通じて身につける空神楽により子供たちがマトリックスの世界へいくのではなく、どこまでも美しいこの世界の探求を続けたくなるような体験を構築できます。",
      weOffer: [
        "STEAM教育プログラムの提供",
        "ドローン技術の実践的学習",
        "アート思考の育成支援",
        "キャリア教育への貢献"
      ],
      weSeek: [
        "カリキュラムへの組み込み",
        "研究プロジェクトの協働",
        "学生インターンの受け入れ",
        "教育効果の実証研究"
      ]
    },
    {
      type: "社会活動団体の方へ",
      icon: Heart,
      description: "私たちは多くの社会問題の根幹に孤立/無関心があると考えています。それぞれの人がスマホを見るのではなく、一緒に空神楽を見て、話し、作って交わる場の中で、見過ごし、見過ごされた人同士が再び思いやり交わし、みなさんの活動により多くの関心と貢献が集まることに協力できればと考えています。",
      weOffer: [
        "課題可視化の表現支援",
        "イベント企画・運営協力",
        "コミュニティ形成支援",
        "情報発信プラットフォーム"
      ],
      weSeek: [
        "社会課題の知見共有",
        "地域コミュニティとの接点",
        "活動シナジーの創出",
        "持続可能な協働モデルの構築"
      ]
    },
    {
      type: "アーティスト/アート団体の方へ",
      icon: Heart,
      description: "私たちは空神楽というスペクタクルでありながら、伝統や宇宙、生命を想起させる表現を通じて、人間と人工物、人為外の自然との関係を編み直し、変化し続ける”技術自然”を地域、日本において再個体化させるアーティスト集団でもあります。アートが市場システムや非芸術領域の社会との関係により大きな歪みが生じる中で、多様な創意をもつアーティストと協業し、まだ見ぬ表現や社会のあり方を模索することができることを楽しみにしています。",
      weOffer: [
        "空神楽を通じた表現支援",
        "空神楽で開かれるイベント空間の提供",
        "分野横断的知の提供",
        "新たな関係構築チャネルの提供"
      ],
      weSeek: [
        "協働的な社会創造",
        "新たな表現や社会課題の共有",
        "活動シナジーの創出",
        "持続可能な協働モデルの構築"
      ]
    },
    {
      type: "自然と関わる業界の方へ",
      icon: Heart,
      description: "私たちはドローン等テクノロジーが人の生活/芸術と自然の営みの架け橋となるよう取り組みを進めています。生態系の変化と経済的環境が目まぐるしく変化し、営みを続けることが難しくなっている中で、空神楽に用いられるドローンが同時に生態系の保護とそれに関わる経済活動の役に立つよう開発を進めたいと思います。協業できることあれば是非ご連絡ください。",
      weOffer: [
        "ドローン等テクノロジーによる課題解決",
        "困りごとを持ち寄る場の提供",
        "テクノロジー活用の教育",
        "生態系の現状に関する情報の発信"
      ],
      weSeek: [
        "余った資材等資源の循環",
        "地域コミュニティとの接点",
        "活動シナジーの創出",
        "持続可能な協働モデルの構築"
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">パートナーシップの形</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  {/* Changed this section to put icon next to title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <partner.icon className="h-12 w-12 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold">{partner.type}</h3>
                    </div>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">わたしたちが提供できること</h4>
                      <ul className="space-y-2">
                        {partner.weOffer.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">共に模索したい協力の形</h4>
                      <ul className="space-y-2">
                        {partner.weSeek.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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