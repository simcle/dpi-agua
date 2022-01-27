import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  actions: {
  },
  modules: {
  }
})
