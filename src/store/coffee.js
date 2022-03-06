const coffee = {
    state: {
        coffee: [],
        searchValue: '',
        sortValue: ''
    },
    actions: {
        setCoffeeData({commit}, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({commit}, data) {
            commit('setSearchValue', data)
        },
        setSortValue({commit}, data) {
            commit('setSortValue', data)
        }
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        },
        setSearchValue(state, data) {
            state.searchValue = data
        },
        setSortValue(state, data) {
            state.sortValue = data
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
        },
        getSearchValue(state) {
            return state.searchValue
        }
    }
}

export default coffee;