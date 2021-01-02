import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Auth from "../views/Login.vue";
import Header from '../layouts/Header.vue'
import Dashboard from '../views/Dashboard.vue'
import DetailUjian from "../views/Detail-ujian.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    components: {
      header: Header,
      default: Dashboard
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    components: {
      header: Header,
      default: Auth
    }
  },
  {
    path: '/detail/:idUjian',
    name: 'DetailUjian',
    components: {
      header: Header,
      default: DetailUjian
    }
  },
  {
    path: '*',
    redirect: '/auth'
  },

]

const router = new VueRouter({
  routes
})

export default router
