// ./src/store/actions
import {db} from '../firebase'

import {
  ADD_PRODUCT
} from './mutation-types'

export const productActions = {
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    db.collection('product').doc('pr').set(payload)
      .then(function () {
        console.log('Add new product ! ' + JSON.stringify(payload))
      })
      .catch(function (error) {
        console.error('Error writing document: ' + JSON.stringify(payload), error)
      })
  }
}

export const manufacturers = {
  allManufactures ({commit}) {
  }
}
