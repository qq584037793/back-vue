import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/views/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
