// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
  ADD_PRODUCT,
  PRODUCT_BY_ID,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
} from './mutation-types'

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    console.log('state ' + state)
    state.showLoader = true
    // this[]
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    console.log('ALL_PRODUCTS_SUCCESS ' + state)
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },
  [ADD_PRODUCT]: (state, payload) => {
    state.showLoader = true
  }
}
