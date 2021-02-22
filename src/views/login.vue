<template>
  <p>Login / Register</p>
    <div v-if="!registered">
      <Login />
    </div>
    <div v-if="registered">
    <Signup />
  </div>

<p @click="toggle">Toggle</p>


</template>

<script>
import { ref } from 'vue'
import Login from '@/components/auth/login'
import Signup from '@/components/auth/signup'

export default {
  components: {Login, Signup},
  setup(){
    const registered = ref(false)


    const toggle = () => {
      // registered = registered != true;
      registered = true;
       // registered ? true : false

      // if ( registered = true ) {
      //   registered = false
      // } else {
      //   registered = true
      // }
    }
    return {registered}


  }
}
</script>

<style scoped>
</style>
