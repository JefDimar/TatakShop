<template>
  <b-card
    no-body
    class="overflow-hidden ml-3 mt-3"
    style="max-width: 540px"
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
        <b-card-body :title="cart.Product.name.toUpperCase()">
          <b-card-text>
            {{
              cart.Product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "IDR",
              })
            }}
          </b-card-text>
          <b-card-text> Quantity: {{ cart.quantity }} </b-card-text>
          <b-input-group prepend="Edit qty:">
            <b-form-input type="number" v-model.number="qty"></b-form-input>
            <b-button variant="primary" @click.prevent="updateQty(cart.id)"
              >Submit</b-button
            >
          </b-input-group>
          <b-button
            variant="danger"
            class="mt-3"
            @click.prevent="deleteCart(cart.id)"
          >
            Delete cart
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CardCart',
  props: [
    'cart'
  ],
  data () {
    return {
      qty: 0
    }
  },
  methods: {
    updateQty (id) {
      const data = {
        id,
        qty: this.qty
      }
      if (this.qty < 1) {
        Swal.fire({
          title: 'Error update!',
          text: 'Quantity must be greater than 1!',
          icon: 'warning',
          showConfirmButton: false,
          timer: 4000
        })
      } else {
        this.$store.dispatch('UPDATE_QTY', data)
        this.qty = 0
      }
    },
    deleteCart (id) {
      this.$store.dispatch('DELETE_CART', id)
    }
  }
}
</script>

<style>
</style>
