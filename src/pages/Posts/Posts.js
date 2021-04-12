import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, selectPosts } from './postsSlice'

const Posts = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchPosts(1))
  }, [dispatch])

  const postItems = posts.map((item, index) =>
    <div key={ index }>
      <h1>{item.title}</h1>
      <div>{item.content.substring(0, 100)}</div>
    </div>
  )
  // 获取歌单列表
  return (
    <div className="">
      {postItems}
    </div>
  )
}
export default Posts
