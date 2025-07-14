import { client } from '@/sanity/client'
import { PortableText, type PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  author?: {
    name: string
    image?: {
      asset: {
        url: string
      }
    }
  }
  mainImage?: {
    asset: {
      url: string
    }
  }
  publishedAt: string
  body: PortableTextBlock[]
}

async function getPost(slug: string): Promise<Post | null> {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    body
  }`, { slug })
  return post
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2"
        >
          ← ブログ一覧に戻る
        </Link>
      </div>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          {post.author && (
            <div className="flex items-center gap-4 mb-6">
              {post.author.image?.asset?.url && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                </p>
              </div>
            </div>
          )}
        </header>

        {post.mainImage?.asset?.url && (
          <div className="mb-8">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} />
          ) : (
            <p>記事の本文がありません。</p>
          )}
        </div>
      </article>
    </div>
  )
}