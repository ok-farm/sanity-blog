import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
        <h1 className="text-5xl font-bold mb-6 text-green-800">OKファーム</h1>
        <p className="text-xl text-green-700 mb-4 max-w-2xl mx-auto font-medium">
          炭素循環農法で育てる「バリバリごぼう」
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          土壌改良と微生物の力で、美味しく安全なごぼうを栽培しています
        </p>
        <div className="space-x-4">
          <Link 
            href="/blog" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ブログを見る
          </Link>
          <Link 
            href="/about" 
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            プロフィール
          </Link>
        </div>
      </section>

      {/* 紹介セクション */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">OKファームの挑戦！</h2>
          <p className="text-orange-700 max-w-2xl mx-auto font-medium text-lg">
            炭素循環農法で育てる「バリバリごぼう」
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            代表の川手晋治が土壌改良と微生物の力を活用し、
            美味しく安全なごぼうの栽培に挑戦しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥕</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">炭素循環農法</h3>
            <p className="text-gray-600">土壌の微生物を活用した革新的な農法で、安全で美味しいごぼうを育てています。</p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📺</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">メディア出演</h3>
            <p className="text-gray-600">テレビや新聞で注目され、YouTubeやTwitterでも農業技術を発信しています。</p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">バリバリごぼう</h3>
            <p className="text-gray-600">独自開発の「バリバリごぼう」は、食感と味にこだわった自慢の商品です。</p>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="text-center py-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-4">農場の日々をお届け</h2>
        <p className="text-green-700 mb-8 text-lg">
          炭素循環農法の様子や「バリバリごぼう」の成長記録をブログで発信中！
        </p>
        <div className="space-x-4">
          <Link 
            href="/blog" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            📝 ブログを見る
          </Link>
          <Link 
            href="https://ok-farm.jp" 
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            🌐 公式サイト
          </Link>
        </div>
      </section>
    </div>
  )
}
