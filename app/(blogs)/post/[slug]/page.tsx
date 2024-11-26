import { Suspense } from 'react'
import { PostSkeleton } from '@/components/blog/loading'
import { ClientPostDetail } from '@/components/blog/ClientPostDetail'

async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`)
  if (!res.ok) throw new Error('Failed to fetch post')
  return res.json()
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
  }) {
  const slug = (await params).slug
  const initialPost = await getPost(slug)

  return (
    <section className="container px-4">
      <Suspense fallback={<PostSkeleton />}>
        <ClientPostDetail initialPost={initialPost} slug={slug} />
      </Suspense>
    </section>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    const slug = (await params).slug
    const post = await getPost(slug)

    if (!post) {
      return {
        title: 'Post non trouvé',
        description: 'Le post demandé n\'existe pas'
      }
    }

    return {
      title: post.title,
      description: post.description.substring(0, 160),
      openGraph: {
        title: post.title,
        description: post.description.substring(0, 160),
        images: [{
          url: post.media_url,
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description.substring(0, 160),
        images: [post.media_url],
        creator: '@jiordi_kengne',
      },
    }
  } catch (error) {
    return {
      title: 'Post non trouvé',
      description: 'Une erreur est survenue lors du chargement du post'
    }
  }
}
