import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import app from './app'

export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
