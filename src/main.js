import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
