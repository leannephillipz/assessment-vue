<template>
  <div class="fullpage">
  <form @submit.prevent="handleSubmit">
    <p>Signup</p>
    <p>This is currently a prototype. Things may be incorrectly placed, errors might be visible.</p>
    <p>If you have not already registered complete the following information:</p>
    <input type="text" placeholder="Display name" v-model="displayName" name="name" required>
    <input type="email" placeholder="Email" v-model="email" name="email" required>
    <input type="password" placeholder="Password" v-model="password" name="password" required>
    <div v-if="error" class="error">{{ error }}</div>
    <button >Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
    <router-link :to="{ name: 'Login' }" class="link">Already registered? Login instead</router-link>
    <!-- <div class="feedback">{{ feedBack }}</div> -->
  </form>
  </div>
</template>

<script>

import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const { signUp, feedBack, error, isPending } = useSignup()
    const router = useRouter()

    const handleSubmit =  () => {

      signUp(email.value, password.value, displayName.value)
      if (error.value) {
        console.log(error.value)
        // router.push({name: 'Home'})
      } else {
        router.push({name: 'Home'})
      }
    }
    return { email, password, displayName, handleSubmit, signUp, feedBack, error, isPending }
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

.fullpage {
      width: calc(100% - 250px);
      height: 80%;
      position: absolute;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: center;
}
.fullpage > div {
  margin:auto;
}
</style>
