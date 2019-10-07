import Vue from 'vue'
import Router from 'vue-router'

// Moved to pages from components
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
// import Admin from '@/pages/Admin'

import AdminRoutes from './admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }, AdminRoutes
  ]
})
