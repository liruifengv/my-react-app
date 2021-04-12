import axios from 'axios'

export const baseUrl = process.env.REACT_APP_PROXY

// axios的实例及拦截器配置
const request = axios.create({
  baseURL: baseUrl
})

request.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
  }
)

export default request
