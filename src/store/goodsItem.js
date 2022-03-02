const goodsItem = {
    state: {
        goodsItem: []
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
        getGoodsItem(state) {
            return state.goodsItem
        },
        getGoodsItemById(state) {
            return (id) => {
                return state.goodsItem.find((card) => card.id === +id);
            }
        }
    }
}

export default goodsItem;