import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '../store'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = 'BBDCC807F38DC2AB '
    // 在这个位置需要同意注入token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 必须返回 config
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    // success处理
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // 超时处理
    if (error.response && error.response.data && error.response.data.code === 401) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
