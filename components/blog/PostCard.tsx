import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { PostsInterface } from '@/utils/types/posts'
import { PostResponse } from '@/redux/slices/posts/postsSlice'

export default function PostCard({ post }: { post: PostResponse }) {
    const date = parseISO(post.published_at)
    const formattedDate = format(date, "d MMMM yyyy 'to' HH'h'mm", { locale: enUS })

    return (
        <div className="group overflow-hidden transition-all duration-300 bg-white shadow-md dark:bg-gray-800 rounded-xl hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
                <Image
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                    src={post.media_url}
                    alt={post.title}
                    width={768}
                    height={432}
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center space-x-4 text-white">
                        <time dateTime={formattedDate} className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formattedDate}
                        </time>
                        <span className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
                            {post.read_time} min de lecture
            </span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <Link href={`/post/${post.slug}`} className="block">
                    <h2 className="mb-3 text-xl font-semibold text-gray-900 transition duration-300 dark:text-gray-100 group-hover:text-primary">
                        {post.title}
                    </h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                    </p>
                </Link>
                <Link
                    href={`/post/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300"
                >
                    Read more
                    <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}
