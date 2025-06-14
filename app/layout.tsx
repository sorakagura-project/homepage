import './globals.css';
import type { Metadata } from 'next';
import { Shippori_Mincho, Cormorant_Garamond, Yuji_Boku } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const shipporiMincho = Shippori_Mincho({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-shippori-mincho',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const yujiBoku = Yuji_Boku({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-yuji-boku',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '空神楽プロジェクト - ”ひとりの光”が集い、舞い、未来を照らす',
  description: 'ドローンの群れが描く夜空の光の物語の集団的創造プロジェクト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${shipporiMincho.variable} ${cormorantGaramond.variable} ${yujiBoku.variable} font-serif antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}