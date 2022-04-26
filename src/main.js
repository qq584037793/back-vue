import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局格式
import './styles/index.scss'
// 导入svgIcon
import installIcon from '@/icons'
// 导入路由守卫
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcon(app)
app.use(store).use(router).mount('#app')
