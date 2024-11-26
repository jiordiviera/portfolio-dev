"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { fetchPosts,PostResponse } from '@/redux/slices/posts/postsSlice'
import { PostsInterface } from '@/utils/types/posts'
import { useEffect, useCallback } from 'react'
import PostCard from './PostCard'
import { PostsSkeletonList } from './PostsSkeletonList'

export function PostsList() {
    const dispatch = useAppDispatch()
    const { list: posts, status, error } = useAppSelector((state) => state.posts)

    const initializePosts = useCallback(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    useEffect(() => {
        initializePosts()
    }, [initializePosts])

    const renderContent = () => {
        if (status === 'loading') return <PostsSkeletonList />
        if (status === 'failed') return <div>Error: {error}</div>
        if (!posts || posts.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        no post for the moment
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Sorry, no article has been published yet.
                    </p>
                </div>
            )
        }

        return (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post: PostResponse) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        )
    }

    return renderContent()
}
