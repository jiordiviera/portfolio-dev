import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createComment } from '@/utils/api'

export const addComment = createAsyncThunk(
    'comments/addComment',
    async ({ postId, comment }: { postId: string; comment: { pseudo: string; message: string } }) => {
        const response = await createComment(postId, comment)
        return response.data
    }
)

export interface CommentsState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: CommentsState = {
    status: 'idle',
    error: null,
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addComment.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || null
            })
    },
})

export default commentsSlice.reducer
