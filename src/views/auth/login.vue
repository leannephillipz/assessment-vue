<template>
  <div class="fullpage">

  <form @submit.prevent="handleSubmit">
    <p>Login</p>
    <p>This is currently a prototype. Things may be incorrectly placed, errors might be visible.</p>
    <input type="email" placeholder="Email" v-model="email" name="email">
    <input type="password" placeholder="Password" v-model="password" name="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Authorising Login</button>
    <router-link :to="{ name: 'Signup' }" class="link">Need an account? Register First</router-link>
  </form>
  </div>
</template>

<script>

import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
        router.push({name: 'Home'})
      }
    }

    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style scoped>
.feedback {
  display:block;
  margin:20px;
  background:#b2bf44;
  padding:30px;
  color:black;
}
.link{
  padding-top: 10px;
    display: inline-block;
}
button {
  float:right;
}

in:auto;
}
</style>
