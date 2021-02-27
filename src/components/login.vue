<template>
  <div class="autharea">

    <div>
      <!-- <img src="@/assets/ninja.png"> -->
        <div v-if="user">
          <router-link :to="{name: 'Profile'}" class="user">{{ user.displayName }}</router-link>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
        <router-link class="btn" :to="{name: 'Signup'}">Signup</router-link>
        <router-link class="btn" :to="{name: 'Login'}">login</router-link>
        </div>
    </div>



  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'


export default {
  setup () {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()
    // console.log(user.value)
    const handleClick = async () => {
      await logout()
      console.log('logout')
      router.push({name: 'Login'})
    }
    return { handleClick, user }
  }

}
</script>



<style scoped>
  .autharea {
    background:;
    display:inline-block;
    position: absolute;
    top:10px;
    right:10px;
  }

  .user {
    font-size:.8em;
    padding:0.5em;
    border-bottom:1px solid white;
    margin:0.5em;
  }
</style>
