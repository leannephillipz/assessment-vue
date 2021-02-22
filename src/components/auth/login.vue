<template>
<p>login</p>
  <form @submit.prevent="handleSubmit">
    <p class="error">Not setup yet!</p>
    <input type="email" placeholder="Email" v-model="email" name="email">
    <input type="password" placeholder="Password" v-model="password" name="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Authorising Login</button>
  </form>
</template>

<script>
// using @ means start at the project src root
// import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    // const { error, login, isPending } = useLogin()
    // const email = ref('')
    // const password = ref('')
    // const router = useRouter()
    //
    // const handleSubmit = async () => {
    //   const res = await login(email.value, password.value)
    //   if (!error.value) {
    //     console.log('user logged in')
    //     router.push({name: 'Home'})
    //   }
    // }
    //
    // return { email, password, handleSubmit, error, isPending }
  }
}
</script>
