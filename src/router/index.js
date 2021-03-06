import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.access_token
  if (to.name === 'Cart' && !auth) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && auth) {
    next({ name: 'Home' })
  } else if (to.name === 'Register' && auth) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
