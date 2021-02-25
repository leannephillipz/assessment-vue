<template>

    <nav :class="shownav ? 'navtoggle' : ''" v-if="user">
      <div class="links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Courses' }">Courses</router-link>
        <router-link :to="{ name: 'Students' }">Students</router-link>
        <router-link :to="{ name: 'Tasks' }" @click="toggle" >Tasks</router-link>
        <hr>
        <router-link :to="{ name: 'AddTask' }">Create Task</router-link>
        <router-link :to="{ name: 'AddCourse' }">Create Course</router-link>
        <router-link :to="{ name: 'AddStudent' }">Create Student</router-link>
      </div>
      <div class="icon">
        <img v-if="shownav"  @click="toggle" src="../assets/icons/chevron_right-24px.svg" alt="">
        <img v-if="!shownav"  @click="toggle" src="../assets/icons/chevron_left-24px.svg" alt="">
      </div>
    </nav>

</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
export default {
setup() {
  const { user } = getUser()
  const shownav = ref(false);
  const toggle =  () => {

    // !shownav.value ? shownav.value == false : shownav.value == true //ternary

    console.log(shownav.value)
    if(shownav.value == true) {
      shownav.value = false
    } else if(shownav.value == false)
    {
      shownav.value  = true
    }
  }

  return { user, toggle, shownav}


}
}
</script>

<style >

</style>
