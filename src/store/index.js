import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: '',
    products: [],
    carts: []
  },
  mutations: {
    fetchProducts (state, data) {
      state.products = data
    },
    set_isloggedin (state, data) {
      state.isLoggedIn = data
    },
    set_user (state, data) {
      state.user = data
    },
    fetchCart (state, data) {
      state.carts = data
    },
    delete_cart (state, id) {
      state.carts = state.carts.filter(element => element.id !== id)
    },
    update_cart (state, data) {
      const index = state.carts.findIndex(index => index.id === data.id)
      const slice = state.carts.slice(index)
      console.log(slice)
    }
  },
  actions: {
    FETCH_PRODUCTS (context) {
      axios.get('/products')
        .then(({ data }) => {
          context.commit('fetchProducts', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    LOGIN (context, data) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.user = data.user
          Swal.fire({
            text: data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 5000
          })
          router.push('/')
          context.commit('set_isloggedin', true)
          context.commit('set_user', data.user)
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'Unauthorized!',
            text: response.data.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 5000
          })
        })
    },
    REGISTER (context, data) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          Swal.fire({
            text: 'Done registered, Thank you!',
            icon: 'success',
            showConfirmButton: false,
            timer: 5000
          })
          router.push('/login')
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'Unauthorized!',
            text: response.data.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 5000
          })
        })
    },
    ADD_CART (context, id) {
      axios({
        url: `/carts/${id}`,
        method: 'POST',
        data: {
          quantity: 1
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          // kalo pertama kali add dia object, kalo ngulang add dia array
          // kasih kondisi jika array
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'Unauthorized!',
            text: response.data.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 5000
          })
        })
    },
    FETCH_CART (context) {
      axios({
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchCart', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    UPDATE_QTY (context, data) {
      axios({
        url: `/carts/${data.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: data.qty
        }
      })
        .then(({ data }) => {
          console.log(data[0])
          context.commit('update_cart', data[0])
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'Unauthorized!',
            text: response.data.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 4000
          })
        })
    },
    DELETE_CART (context, id) {
      axios({
        url: `/carts/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Success',
            text: data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 4000
          })
          context.commit('delete_cart', id)
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'Unauthorized!',
            text: response.data.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 4000
          })
        })
    }
  },
  modules: {
  }
})
