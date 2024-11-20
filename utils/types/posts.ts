export interface PostsInterface{
    id: number,
    "user_id": number,
    "title": string,
    "slug": string,
    "description": string,
    "excerpt": string,
    "published_at": string,
    "views_count": number,
    "read_time":number,
    "media_url": string,
    "comments":CommentInterface[]
}

export interface CommentInterface{
    id: string,
    message: string,
    pseudo: string,
    created_at:string
}
