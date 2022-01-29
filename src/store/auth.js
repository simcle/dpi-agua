export default {
    namespaced: true,
    state: {
        user_id: '',
        token: ''
    },
    getters: {
        get_token (state) {
            return state.token
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        }
    }
}