<template>
  <div class="home">
    <carousel/>
    <!-- Card product -->
    <b-card-group deck>
      <b-card
        :title="product.name.toUpperCase()"
        :img-src="product.image_url"
        :img-alt="product.name+'.image'"
        align="center"
        img-top
        v-for="product in products"
        :key="product.id">
        <b-card-text>
          {{product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'IDR'
          })}}
        </b-card-text>
        <b-card-text>
          Stock available : {{product.stock}}
        </b-card-text>
        <template #footer>
          <b-button
            variant="warning"
            @click.prevent="addToCart(product.id)">
            Add to cart
          </b-button>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  methods: {
    addToCart (id) {
      if (!localStorage.access_token) {
        Swal.fire({
          title: 'Please login first',
          text: 'You are not login yet!',
          icon: 'warning',
          showConfirmButton: false,
          timer: 4000
        })
        this.$router.push('/login')
      } else {
        this.$store.dispatch('ADD_CART', id)
      }
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('FETCH_PRODUCTS')
  }
}
</script>
