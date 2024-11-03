import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { PostMetadata } from '@/components/ui/PostMetadata';
import { CommentList } from '@/components/ui/CommentList';
import { fetchPost } from '@/lib/api';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import PageProps  from 'next';

const PostSkeleton = () => (
    <div className="animate-pulse space-y-8">
        <Skeleton className="aspect-video w-full rounded-xl" />
        <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="flex gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-48 w-full" />
        </div>
    </div>
);

async function PostDetail({ slug }: { slug: string }) {
    const post = await fetchPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto">
            <div className="relative aspect-video mb-8 rounded-xl overflow-hidden shadow-xl">
                <Image
                    src={`https://my.jd-devs.com/${post.media[0].original_url}`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 transform group-hover:scale-105"
                    priority
                />
            </div>

            <div className="space-y-6">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold
                             text-gray-900 dark:text-white
                             tracking-tight">
                    {post.title}
                </h1>

                {/* Metadata */}
                <PostMetadata
                    publishedAt={post.published_at}
                    viewsCount={post.views_count}
                    readTime={post.read_time}
                />

                {/* Content */}
                <div className="prose prose-h1:text-4xl prose-p:text-base prose-headings:font-heading">
                    <MarkdownRenderer content={post.description} />
                </div>

                {/* Comments */}
                <CommentList comments={post.comments} />
            </div>
        </article>
    );
}
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
   const slug = (await params).slug
    return (
        <section className="py-24 lg:pt-40 lg:pb-10">
            <div className="container px-4">
                <Suspense fallback={<PostSkeleton />}>
                    <PostDetail slug={slug} />
                </Suspense>
            </div>
        </section>
    );
}


export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = await fetchPost(slug);

    if (!post) {
        return {
            title: 'Post non trouvé',
            description: 'Le post demandé n\'existe pas'
        };
    }

    return {
        title: post.title,
        description: post.description.substring(0, 160),
        openGraph: {
            title: post.title,
            description: post.description.substring(0, 160),
            images: [{
                url: `https://my.jd-devs.com/${post.media[0].original_url}`,
            }],
        },
    };
}
