<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" v-bind:key='product.id'></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'product-list',
  // created () {
  //   console.log('created')
  //   if (this.products === undefined) {
  //     this.$store.dispatch('bindProducts')
  //   }
  // },
  computed: {
    products () {
      console.log(this.$store)
      return this.$store.getters.allProducts
    }
  },
  data () {
    return {

    }
  },
  components: {
    'product-item': ProductItem
  }
}
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
