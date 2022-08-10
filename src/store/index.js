import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules.js/auth/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
 
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule
  },
})
