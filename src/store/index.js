import Vue from 'vue'
import Vuex from 'vuex'
import { manufacturers } from './actions'
// import { productMutations } from './mutations'
import { productGetters } from './getters'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../firebase'

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
  mutations: vuexfireMutations,
  // actions: Object.assign({}, productActions),
  actions: {
    bindProducts: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('products', db.collection('product'))
    })
  },
  // mutations: Object.assign({}, productMutations),
  getters: Object.assign({}, manufacturers, productGetters)
})
