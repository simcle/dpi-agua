import Vue from 'vue'
import VueRouter from 'vue-router'
import indexDashboard from '../views/dashboard/index'
import Dashboard from '../views/dashboard/dashboard'
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
