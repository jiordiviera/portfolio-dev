import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const register = createAsyncThunk('auth/register', async (userData: any, { rejectWithValue }) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
});

export const login = createAsyncThunk('auth/login', async (credentials: any, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;

    } catch (error: any) {
        return rejectWithValue({ message: "Une erreur est survenue" });
    }
});

export const updateProfile = createAsyncThunk('auth/updateProfile', async (profileData: any, { rejectWithValue, getState }) => {
    try {

    const state: any = getState();
    const token = state.auth.token;
    const response = await axios.put(`${API_URL}/auth/profile`, profileData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {

    }

});
interface User {
    name: string,
    email: string,
    twitter: string,
    github: string,
    linkedin: string
}
interface AuthState {
    user: null | User,
    token: null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}
const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.status = 'succeeded';
            })
            .addCase(login.pending, (state, action) => {
                state.status = 'loading';
            }).addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.status = 'succeeded';
                console.log('state user', state.token)
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Unknown error';
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.status = 'succeeded';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
