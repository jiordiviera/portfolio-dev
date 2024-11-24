import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
});

export const getPosts = () => api.get('/posts');
export const getPost = (slug: string) => api.get(`/posts/${slug}`);
export const createComment = (postId: string, comment: { pseudo: string; message: string }) =>
    api.post(`/posts/${postId}/comments`, comment);

export default api;
