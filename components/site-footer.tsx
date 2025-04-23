import { Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">空神楽プロジェクト</h3>
            <p className="text-sm text-muted-foreground">
              光るドローンの群れと紡ぐ、<br/>わたしたちの未来創造プロジェクト
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  プロジェクト背景
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-primary">
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link href="/enjoy" className="text-sm hover:text-primary">
                  楽しみ方
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-sm hover:text-primary">
                  仲間になる
                </Link>
              </li>
              <li>
                <Link href="/collab" className="text-sm hover:text-primary">
                  協業について
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">自分の関心に沿うページガイド</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/interests/technology" className="text-sm hover:text-primary">
                  テクノロジー好き
                </Link>
              </li>
              <li>
                <Link href="/interests/art" className="text-sm hover:text-primary">
                  美術好き
                </Link>
              </li>
              <li>
                <Link href="/interests/culture" className="text-sm hover:text-primary">
                  文化好き
                </Link>
              </li>
              <li>
                <Link href="/interests/science" className="text-sm hover:text-primary">
                  科学好き
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-sm hover:text-primary">
                  people from abroad interested in Japanese culture frontier
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/sorakagura_project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjLozgVf2zJ3iyyaRVUnA8Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              お問い合わせは
              <Link href="/collab#contact" className="text-primary hover:underline ml-1">
                こちら
              </Link>
              からお願いします。
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 空神楽DAO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}