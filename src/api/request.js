import axios from 'axios'

export const baseUrl = 'http://sayhub.me/api'

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
