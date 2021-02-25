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
            variant="warning">
            Add to cart
          </b-button>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data () {
    return {
    }
  },
  methods: {
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
