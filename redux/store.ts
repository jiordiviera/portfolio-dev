import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from './slices/posts/postsSlice'
import commentsReducer from './slices/posts/commentsSlice'
import authReducer from './slices/auth/authSlice'

// Configuration de la persistance
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'posts'],
    // blacklist: ['comments']
}

// Combine tous les reducers
const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                },
            }),
        devTools: process.env.NODE_ENV !== 'production',
    })

    const persistor = persistStore(store)

    return { store, persistor }
}

export type AppStore = ReturnType<typeof makeStore>['store']
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
