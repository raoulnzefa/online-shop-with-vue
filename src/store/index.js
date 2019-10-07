import Vue from 'vue'
import Vuex from 'vuex'
import { productActions, manufacturers } from './actions'
import { productMutations } from './mutations'
import { productGetters } from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  actions: Object.assign({}, productActions),
  mutations: Object.assign({}, productMutations),
  getters: Object.assign({}, manufacturers, productGetters)
})
