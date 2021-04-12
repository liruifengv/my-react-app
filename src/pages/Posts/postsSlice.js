import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: 0
  },
  reducers: {
    createPost (state, action) {},
    updatePost (state, action) {},
    deletePost (state, action) {}
  }
})

export const { createPost, updatePost, deletePost } = postsSlice.actions

export const { usersLoading, usersReceived } = postsSlice.actions

export default postsSlice.reducer
