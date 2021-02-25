<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
<style>
body {
  background-color: #e5e5e5;
  margin: 0;
  padding: 0;
}
</style>
