'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ・サイトタイトル */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              OKファーム
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              ブログ
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              プロフィール
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
              aria-label="メニューを開く"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ブログ
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                プロフィール
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}