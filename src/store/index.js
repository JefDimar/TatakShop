import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchProducts (state, data) {
      state.products = data
    }
  },
  actions: {
    FETCH_PRODUCTS (context) {
      axios.get('/products')
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchProducts', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  },
  modules: {
  }
})
