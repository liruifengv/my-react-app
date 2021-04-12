import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import postsSlice from '../pages/Posts/postsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice
  }
})
