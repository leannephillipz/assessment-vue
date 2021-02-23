<template>
  <p>Login / Register</p>
    <div v-if="!registered">
      <p @click="registered = !registered">Signup</p>
    </div>
    <div v-if="registered">
      <p @click="registered = !registered">Login</p>

  </div>

</template>

<script>
import { ref } from 'vue'

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
