import { PostSkeleton } from "./PostSkeleton";

export function PostsSkeletonList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <PostSkeleton key={index} />
            ))}
        </div>
    )
}
