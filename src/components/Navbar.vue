<template>

    <nav :class="shownav ? 'navtoggle' : ''" v-if="user">
      <div class="links">
        <router-link :to="{ name: 'Home' }" @click="toggle" >Home</router-link>
        <router-link :to="{ name: 'Courses' }" @click="toggle" >Courses</router-link>
        <router-link :to="{ name: 'Students' }" @click="toggle" >Students</router-link>
        <router-link :to="{ name: 'Assessment' }" @click="toggle" >Assessment</router-link>
        <router-link :to="{ name: 'Tasks' }" @click="toggle" >Tasks</router-link>
        <router-link :to="{ name: 'Projects' }" @click="toggle" >Projects</router-link>
        <hr>
        <p>Admin:</p>
        <router-link :to="{ name: 'TaskSort' }" @click="toggle" >Task Match</router-link>
        <router-link :to="{ name: 'AddCourse' }" @click="toggle" >Course</router-link>
        <router-link :to="{ name: 'AddStudent' }" @click="toggle" >Student</router-link>
        <router-link :to="{ name: 'AddTask' }" @click="toggle" >Task</router-link>
        <router-link :to="{ name: 'AddAssessment' }" @click="toggle" >Assessment</router-link>
      </div>
      <div class="icon">
        <img v-if="shownav"  @click="toggle" src="../assets/icons/chevron_left-24px.svg" alt="">
        <img v-if="!shownav"  @click="toggle" src="../assets/icons/chevron_right-24px.svg" alt="">
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
