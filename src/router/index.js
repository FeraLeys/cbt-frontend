import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Auth from "../views/Login.vue";
import Header from '../layouts/Header.vue'
import Dashboard from '../views/Dashboard.vue'

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
    path: '*',
    redirect: '/auth'
  },

]

const router = new VueRouter({
  routes
})

export default router
