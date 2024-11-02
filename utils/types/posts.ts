export interface PostsInterface{
    id: number,
    "user_id": number,
    "title": string,
    "slug": string,
    "description": string,
    "token": "s0FELYF97VPpNz6fxBkCMuXK9B90WQWxj34OaeC2",
    "published_at": string,
    "views_count": number,
    "read_time":number,
    "media":Media[]
}

interface Media{
    original_url: string
}
export interface PostDetailInterface {
    id: number;
    title: string;
    description: string;
    slug: string;
    published_at: string;
    read_time: number;
    views_count: number;
    media: {
        id: number;
        original_url: string;
    }[];
    comments:CommentInterface[];
}
export interface CommentInterface{
    id: string,
    message: string,
    pseudo: string,
    created_at:string
}
