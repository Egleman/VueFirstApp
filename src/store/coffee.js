const coffee = {
    state: {
        coffee: null
    },
    actions: {
        setCoffeeData({commit}, data) {
            commit('setCoffeeData', data)
        }
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        }
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getProductById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id);
            }
        }
    }
}

export default coffee;