<template>
  <div>
    <h3 class="ml-3 mb-3 mt-3">Shopping Cart</h3>
    <div v-if="!carts[0]">
      <h1 class="text-capitalize text-center">
        Your Shopping Cart is Empty
      </h1>
    </div>
    <b-card-group class="d-flex flex-column">
      <card-cart
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"/>
    </b-card-group>
  </div>
</template>

<script>
import CardCart from '../components/CardCart'
export default {
  components: {
    CardCart
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('FETCH_CART')
  }
}
</script>

<style>
</style>
