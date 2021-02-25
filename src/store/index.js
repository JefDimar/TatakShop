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
    products: []
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
          // kalo pertama kali dia object, kalo ngulang dia array
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
    }
  },
  modules: {
  }
})
