<template>
  <div class="container-fluid">
    <b-card class="container bg-light d-flex justify-content-center align-item-center w-25 mt-5">
      <h1>Welcome to TatakShop</h1>
      <p>Login here:</p>
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Email address"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="button" variant="success">Don't Have Account?</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // const input = {
      //   email: this.form.email,
      //   password: this.form.password
      // }
      this.form.email = ''
      this.form.password = ''
    },
    onReset () {
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>

<style>

</style>
