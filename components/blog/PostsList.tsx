import React from 'react'
import PostCard from './PostCard'
import { PostsInterface } from '@/utils/types/posts'

async function fetchArticles() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-posts`, {
            next: { revalidate: 3600 },
            cache: 'force-cache'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch articles')
        }

        return response.json()
    } catch (error) {
        console.error('Error fetching articles:', error)
        return []
    }
}

export default async function PostsList() {
    const posts = await fetchArticles()

    if (!posts || posts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold text-center mb-4">no post for the moment</h2>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    Sorry, no article has been published yet.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: PostsInterface) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}