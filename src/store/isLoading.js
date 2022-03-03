const isLoading = {
    state: {
        isLoading: false
    },
    actions: {
        setIsLoading({commit}, data) {
            commit('setIsLoading', data)
        }
    },
    mutations: {
        setIsLoading(state, data) {
            state.isLoading = data
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading
        },
    }
}

export default isLoading;