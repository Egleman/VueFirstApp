const goodsItem = {
    state: {
        goodsItem: null
    },
    actions: {
        setGoodsItemData({commit}, data) {
            commit('setGoodsItemData', data)
        }
    },
    mutations: {
        setGoodsItemData(state, data) {
            state.goodsItem = data
        }
    },
    getters: {
        getGoodsItemData(state) {
            return state.goodsItem
        },
    }
}

export default goodsItem;