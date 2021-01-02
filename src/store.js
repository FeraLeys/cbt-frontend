import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var baseAPI = 'http://localhost:8080/';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_loading: false,
    token: localStorage.getItem('_gsid') || null,
    ujianList: []
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
    getUjian({ state, dispatch }) {
      dispatch('loading', true);
      return new Promise((resolve, reject){
        axios
          .post(baseAPI + '/api/ujian-list?' + state.token)
          .then((ress) => {
            dispatch('loading', false);
            if (ress.status == 'OK') {
              dispatch('setListUjian', ress.data.list);
            }
            resolve(ress)
          })
          .catch((err) => {
            dispatch('loading', false);
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
