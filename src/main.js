import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('./store/subscibe')

import { conPort } from './arduino'

import './database'
import './index.css'
import './assets/icons/icomoon/styles.min.css'

axios.defaults.baseURL = 'http://localhost:3000/v1'

function getPatFromLocalstorage () {
  let path = localStorage.getItem('path')
  if(path) {
    conPort(path)
  }
}

getPatFromLocalstorage()

Vue.config.productionTip = false
store.commit('auth/SET_TOKEN', localStorage.getItem('token'))
store.commit('auth/SET_USER_ID', localStorage.getItem('user_id'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
