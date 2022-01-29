export default {
    namespaced: true,
    state: {
        user_id: '',
        token: ''
    },
    getters: {
        get_token (state) {
            return state.token
        },
        get_user_id(state) {
            return state.user_id
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER_ID (state, user_id) {
            state.user_id = user_id
        }
    }
}