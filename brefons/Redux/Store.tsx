/**
 * Redux store that manages all our reducers(redux state functions)
 */

import { configureStore } from '@reduxjs/toolkit'
import { MenuReducer, menuSlice } from './Slices/MenuSlice'
// ...

export const store = configureStore({
  reducer: {
    toggleMenu:MenuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch