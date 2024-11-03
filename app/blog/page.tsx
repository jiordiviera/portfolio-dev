import React, { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";
import { PostsInterface } from '@/utils/types/posts';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

async function fetchArticles() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/all-posts', {
            next: {revalidate: 3600},
            cache: 'force-cache'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

const PostsList = async () => {
    const posts = await fetchArticles();
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: PostsInterface) => {
                const date = parseISO(post.published_at);
                const formattedDate = format(date, "d MMMM yyyy 'à' HH'h'mm", { locale: fr });

    return ( <div key={post.id} className="group overflow-hidden transition-all duration-300 bg-white shadow-md dark:bg-gray-800 rounded-xl hover:shadow-xl">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
                            <Image
                                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 opacity-100"
                                src={"https://my.jd-devs.com/"+post.media[0].original_url} loading="lazy"
                                alt="Laravel : Pourquoi l'Adopter ? Analyse des Bénéfices et Inconvénients"
                                width={768}
                                height={432}
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-black/70 to-transparent">
                                <div className="flex items-center space-x-4 text-white">
                                    <time dateTime={formattedDate} className="flex items-center text-sm">
                                         <Calendar className="w-4 h-4 mr-1" />
                                        {formattedDate}
                                    </time>
                                    <span className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {post.read_time} min de lecture
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <Link href={"/post/"+post.slug}
                               className="block">
                                <h4 className="mb-3 text-xl font-semibold text-gray-900 transition duration-300 dark:text-gray-100 group-hover:text-primary">
                                    {post.title}
                                </h4>
                                <p className="mb-4 text-gray-600 dark:text-gray-400">
                                    #Introduction
                                    Laravel, lancé en 2011 par Taylor Otwell, est devenu un cadre de développement
                                    inconto...
                                </p>
                            </Link>
                            <Link href={"/post/"+post.slug}
                               className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300"
                            >
                                Lire la suite
                                <svg
                                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>)
})}

                </div>
    )
}
const PostSkeleton = () => (
    <Card className="animate-pulse">
        <Skeleton className="h-48 w-full" />
        <CardContent className="space-y-3 p-6">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex flex-wrap gap-2 mt-4">
                {[1, 2, 3].map((item) => (
                    <Skeleton key={item} className="h-6 w-20 rounded-full" />
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function Page() {
    return (
        <section className="py-24 lg:pt-40 lg:pb-10">
            <div
                className="container px-4 mx-auto">
                <div className="relative mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl text-text font-heading">
                        Development blog
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Discover our latest captivating and inspiring articles.
                    </p>
                </div>
<Suspense fallback={
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <PostSkeleton key={item} />
                            ))}
                        </div>
                    }>
                        <PostsList />
                    </Suspense>
            </div>
        </section>
    )
}
