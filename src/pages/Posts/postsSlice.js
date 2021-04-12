import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPosts } from '@/api/posts'

/**
 * @description 获取文章请求
 * @author liruifeng
 * @date 12/04/2021
 * @export
 * @param {*} page
 * @return {response.formatData}
 */
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page, thunkAPI) => {
    const response = await getPosts(page)
    return response.formatData
  }
)

/**
 * @description posts slice
 * @author liruifeng
 * @date 12/04/2021
 * @export
 */
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

// reducer
export default postsSlice.reducer

// selectPosts 供页面 useSelector 调用
export const selectPosts = (state) => state.posts.list
