<template>
  <div>
    <h3 class="ml-3 mb-3 mt-3">Shopping Cart</h3>
    <b-card-group class="d-flex flex-column">
      <b-card
        no-body
        class="overflow-hidden ml-3 mt-3"
        style="max-width: 540px"
        v-for="cart in carts"
        :key="cart.id"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="cart.Product.image_url"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="cart.Product.name">
              <b-card-text>
                {{
                  cart.Product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "IDR",
                  })
                }}
              </b-card-text>
              <b-card-text> Quantity: {{cart.quantity}} </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
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
