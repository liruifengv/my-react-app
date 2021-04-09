import React, { useState, useEffect } from 'react'

const Example = (props) => {
  const [count, setCount] = useState(0)
  // const [age, setAge] = useState(42)
  // const [fruit, setFruit] = useState('banana')
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}

export default Example
