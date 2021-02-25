<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Tatak Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" @click.prevent="home">Home</b-nav-item>
          <b-nav-item href="#" @click.prevent="cart">Shopping Cart</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click.prevent="login">Login</b-nav-item>
          <b-nav-item href="#" @click.prevent="register">Register</b-nav-item>
          <b-nav-item-dropdown right v-if="isLoggedIn">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-text="user"></em>
            </template>
            <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    home () {
      this.$router.push('/')
    },
    cart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    logout () {
      localStorage.access_token.clear()
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    user () {
      return this.$store.state.user
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('set_isloggedin', true)
    }
  }
}
</script>

<style>
</style>
