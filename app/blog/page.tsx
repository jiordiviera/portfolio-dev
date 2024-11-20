import React, { Suspense } from 'react'
import { Metadata } from 'next'
import PostsList from '@/components/blog/PostsList'
import PostSkeleton from '@/components/blog/PostSkeleton'

export const metadata: Metadata = {
    title: 'Blog | Dev Jiordi',
    description: 'Discover our latest captivating and inspiring articles about web development.',
    openGraph: {
        title: 'Dev Jiordi\'s Blog',
        description: 'Explore the latest web development insights and tutorials.',
        images: [
            {
                url: 'https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4',
                width: 400,
                height: 400,
                alt: 'Dev Jiordi',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dev Jiordi\'s Blog',
        description: 'Discover the latest web development articles and tutorials.',
        images: ['https://avatars.githubusercontent.com/u/56254853'],
        creator: '@jiordi_kengne',
    },
}

export default function BlogPage() {
    return (
        <section className="py-24 lg:pt-40 lg:pb-10">
            <div className="container px-4 mx-auto">
                <div className="relative mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl text-text font-heading">
                        Development Blog
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Discover our latest captivating and inspiring articles.
                    </p>
                </div>
                <Suspense fallback={<PostsSkeletonList />}>
                    <PostsList />
                </Suspense>
            </div>
        </section>
    )
}

function PostsSkeletonList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </div>
    )
}