import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: {
    asset: {
      url: string
    }
  }
  publishedAt: string
}

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt
  }`)
  return posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sanity Blog</h1>
        <p className="text-gray-600">Next.js & Sanityで作成したブログです</p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">まだブログ記事がありません。</p>
          <p className="text-gray-500">Sanity Studioで最初の記事を作成してください。</p>
          <Link 
            href="/studio" 
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Sanity Studioを開く
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/posts/${post.slug.current}`}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {post.mainImage?.asset?.url && (
                  <div className="aspect-video relative">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
