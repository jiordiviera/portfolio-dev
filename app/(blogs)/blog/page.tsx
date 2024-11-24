import { PostSkeleton } from '@/components/blog/PostSkeleton'
import { PostsList } from '@/components/blog/PostsList'
import { Suspense } from 'react'

export default function BlogPage() {
    return (
        <section className="">
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

export function PostsSkeletonList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </div>
    )
}
