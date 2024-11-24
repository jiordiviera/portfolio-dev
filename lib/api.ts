import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { LoginInput, CreatePostInput } from '../types';
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
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const queryClient = new QueryClient();

export const login = async (data: LoginInput) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (data: CreatePostInput) => {
  const response = await api.post('/posts', data);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await api.delete(`/ posts / ${ id } `);
  return response.data;
};
