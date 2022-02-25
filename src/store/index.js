import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        coffee
    }
})

export default store;