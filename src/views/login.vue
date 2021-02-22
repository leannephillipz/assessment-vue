<template>
  <p>Login / Register</p>
    <div v-if="!registered">
      <Login />
      <p @click="registered = !registered">Not Registered? Signup</p>
    </div>
    <div v-if="registered">
    <Signup />
    <p @click="registered = !registered">Already Registered? Login</p>
  </div>




</template>

<script>
import { ref } from 'vue'
import Login from '@/components/auth/login'
import Signup from '@/components/auth/signup'

export default {
  components: {Login, Signup},
  setup(){
    const registered = ref(false)


    // const toggle = () => {
    //   // registered = registered != true;
    //   registered = true;
    //    // registered ? true : false
    //
    //   // if ( registered = true ) {
    //   //   registered = false
    //   // } else {
    //   //   registered = true
    //   // }
    // }
    return {registered}


  }
}
</script>

<style scoped>
</style>
