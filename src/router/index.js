import Vue from 'vue'
import VueRouter from 'vue-router'
import indexDashboard from '../views/dashboard/index'
import Dashboard from '../views/dashboard/dashboard'
import Register from '../views/register/register'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: indexDashboard,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
