import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      ph: 0.00,
      do: 0.00,
      ec: 0.00
    },
    status: false,
    error: '',
    internet: false,
  },
  getters: {
    get_data (state) {
      return state.data
    },
    get_status (state) {
      return state.status
    },
    get_error (state) {
      return state.error
    },
    get_internet (state) {
      return state.internet
    }
  },
  mutations: {
    SET_DATA (state, serialdata) {
      state.data = serialdata
    },
    SET_STATUS (state, status) {
      state.status = status
    },
    SET_ERROR (state, error) {
      state.error = error
    },
    SET_INTERNET (state, internet) {
      state.internet = internet
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
