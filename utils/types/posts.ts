export interface PostsInterface{
    _id: number,
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
    _id: string,
    message: string,
    pseudo: string,
    createdAt:string
}
