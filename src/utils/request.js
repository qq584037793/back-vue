import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = 'BBDCC807F38DC2AB '
    // 必须返回 config
    return config
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
    // todo:超时处理
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
