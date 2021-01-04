import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var baseAPI = 'http://localhost/cbt-backend/public/';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : localStorage.getItem('_token') || null
  },
  mutations: {
    setListUjian(state, data) {
      state.ujianList = data;
    },
    loading(state, status = true) {
      state.is_loading = status;
    }
  },
  actions: {

  },
  modules: {
  }
})
