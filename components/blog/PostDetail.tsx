// PostDetail.tsx
'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchPostBySlug,PostResponse } from '@/redux/slices/posts/postsSlice';
import { CommentList } from '@/components/ui/CommentList';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { PostMetadata } from '@/components/ui/PostMetadata';


interface PostDetailProps {
  initialPost: PostResponse;
  slug: string;
}

export default function PostDetail({ initialPost, slug }: PostDetailProps) {
  const dispatch = useAppDispatch();
  const { currentPost: post, status, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostBySlug(slug));
    }
  }, [slug, dispatch]);

  if (status === 'failed') {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Error: {error || 'Failed to load post'}
        </h2>
      </div>
    );
  }

  const displayPost = status === 'loading' ? initialPost : (post || initialPost);

  return (
    <article className="max-w-4xl mx-auto">
      <div className="relative aspect-video mb-8 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={displayPost.media_url}
          alt={displayPost.title}
          fill
          className="object-cover transition-transform duration-700 transform group-hover:scale-105"
          priority
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {displayPost.title}
        </h1>

        <PostMetadata
            publishedAt={displayPost.published_at}
            viewsCount={displayPost.views_count}
            readTime={displayPost.read_time}
        />

        <div
            className="prose prose-lg max-w-none dark:prose-invert prose-h1:text-4xl prose-p:text-base prose-headings:font-heading">
          <MarkdownRenderer content={displayPost.description}/>
        </div>

        <section className="mt-12 pt-8 border-t">
          <CommentList comments={displayPost.comments} postId={displayPost._id}/>
        </section>
      </div>
    </article>
  );
}
