'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { fetchPostBySlug, PostResponse, selectPostBySlug } from '@/redux/slices/posts/postsSlice'
import PostDetail from '@/components/blog/PostDetail'

interface ClientPostDetailProps {
  initialPost: PostResponse
  slug: string
}

export  function ClientPostDetail({ initialPost, slug }: ClientPostDetailProps) {
  const dispatch = useAppDispatch()
  const post = useAppSelector((state) => selectPostBySlug(state, slug)) || initialPost

  useEffect(() => {
    dispatch(fetchPostBySlug(slug))
  }, [dispatch, slug])
  return <PostDetail initialPost={post} slug={slug} />
}
