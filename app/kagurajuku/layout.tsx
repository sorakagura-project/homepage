import { KagurajukuHeader } from "@/components/kagurajuku/kagurajuku-header"
import { KagurajukuFooter } from "@/components/kagurajuku/kagurajuku-footer"

interface KagurajukuLayoutProps {
  children: React.ReactNode
}

export default function KagurajukuLayout({ children }: KagurajukuLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <KagurajukuHeader />
      <div className="flex-1">{children}</div>
      <KagurajukuFooter />
    </div>
  )
}
