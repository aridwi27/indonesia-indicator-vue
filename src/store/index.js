import Vue from 'vue'
import Vuex from 'vuex'
import covid from './modules/covid'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    covid: covid
  }
})

export default store
