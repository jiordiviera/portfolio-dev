import { PostsList } from '@/components/blog/PostsList'

export default function BlogPage() {
    return (
            <main className="container px-4 mx-auto">
                <header className="relative mb-12 text-center">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Development Blog
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Discover our latest captivating and inspiring articles.
                    </p>
                </header>
                <PostsList />
            </main>
    )
}
