import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
});

export const fetchPostBySlug = createAsyncThunk('posts/fetchPostBySlug', async (slug: string) => {
    const response = await axios.get(`${API_URL}/posts/${slug}`);
    return response.data;
});
export interface IPostData{
    title: string,
    description: string,
    file: File
}
export const createPost = createAsyncThunk('posts/createPost', async ({ postData }:{postData:any},{getState,rejectWithValue}) => {
    const state: any = getState();
    const token = state.auth.token;
    const response = await axios.post(`${API_URL}/posts`, postData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, postData }: { id: string, postData: any }, { getState }) => {
    const state: any = getState();
    const token = state.auth.token;
    const response = await axios.put(`${API_URL}/posts/${id}`, postData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
});
export interface PostsState {
    list: any[]
    currentPost: any | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined
}

const initialState: PostsState = {
    list: [],
    currentPost: null,
    status: 'idle',
    error: undefined,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPostBySlug.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostBySlug.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentPost = action.payload;
            })
            .addCase(fetchPostBySlug.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(updatePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.list.findIndex((post: any) => post._id === action.payload._id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
                if (state.currentPost && state.currentPost._id === action.payload._id) {
                    state.currentPost = action.payload;
                }
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
