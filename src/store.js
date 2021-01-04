import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : localStorage.getItem('_token') || null
  },
  mutations: {
  },
  actions: {
    
  },
  getters: {
    isLoggedIn: state => (state.token == null)? false : true,
  
  },
  modules: {
  }
})
