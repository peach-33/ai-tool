import { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '../components/layout/Navbar'

export const metadata: Metadata = {
  title: 'AI Tools',
  description: '智能罗盘，导航你的AI探索之旅',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
} 