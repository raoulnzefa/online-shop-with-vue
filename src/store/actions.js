// ./src/store/actions
import {db} from '../firebase'

import {
  ADD_PRODUCT,
  PRODUCT_BY_ID,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
} from './mutation-types'

export const productActions = {
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    db.collection('product').doc('1uiDzxbdHUBzvnRxokCb').get().then(function (doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
    db.collection('product').doc().set(payload)
      .then(function () {
        console.log('Add new product ! ' + JSON.stringify(payload))
      })
      .catch(function (error) {
        console.error('Error writing document: ' + JSON.stringify(payload), error)
      })
  },
  allProducts ({commit}) {
    console.log('ALL_PRODUCTS')
    commit(ALL_PRODUCTS)
    var data = []
    db.collection('product').get()
      .then(function (e) {
        e.forEach(function (doc) {
          console.log(doc.data())
          data.push(doc.data())
        })
        commit(ALL_PRODUCTS_SUCCESS, data)
      })
      .catch(function () {
        console.log('errror ')
      })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)

    db.collection('product').doc(payload).get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          // commit(PRODUCT_BY_ID_SUCCESS, doc.data())
        }
      })
      .catch(function () {
        console.log('errror ')
      })
    // axios.get(`${API_BASE}/products/${payload}`).then(response => {
    //   console.log(payload, response.data)
    //   commit(PRODUCT_BY_ID_SUCCESS, response.data)
    // })
  }
}

export const manufacturers = {
  allManufacturers ({commit}) {
  }
}
