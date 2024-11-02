import { PostsInterface } from "@/utils/types/posts";

export async function fetchPost(slug: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${slug}`, {
            next: { revalidate: 3600 },
            cache: 'force-cache'
        });

        if (!response.ok) {
            return null;
        }

        return response.json() as Promise<PostsInterface>;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}
