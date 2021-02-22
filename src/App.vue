<template>
  <Login />
    <Navbar />
    <main>
      <router-view  />
    </main>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/login.vue'

export default {
  components: { Navbar, Login },
  setup() {

  }

}
</script>

<style>

</style>
