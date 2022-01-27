import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { conPort } from './arduino'


import './index.css'
import './assets/icons/icomoon/styles.min.css'

function getPatFromLocalstorage () {
  let path = localStorage.getItem('path')
  if(path) {
    conPort(path)
  }
}

getPatFromLocalstorage()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
