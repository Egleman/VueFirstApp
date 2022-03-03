import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import coffee from './coffee'
import bestsellers from './bestsellers'
import goods from './goods'
import goodsItem from './goodsItem'
import isLoading from './isLoading'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        coffee,
        bestsellers,
        goods,
        goodsItem,
        isLoading
    }
})

export default store;