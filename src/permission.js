import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

// 路由守卫
router.beforeEach(async (to, from, next) => {
  // 存在token，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 不存在用户信息，需获取信息
      if (!store.getters.hasUserInfo) {
        // 获取用户信息action
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token，进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
