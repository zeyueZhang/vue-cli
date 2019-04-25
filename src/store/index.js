import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './modules/todoList';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todoList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
