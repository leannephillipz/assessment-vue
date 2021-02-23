<template>
  <div v-if="user">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Students' }">Students</router-link>
      <router-link :to="{ name: 'Courses' }">Courses</router-link>
      <router-link :to="{ name: 'Tasks' }">Tasks</router-link>
      <hr>
      <router-link :to="{ name: 'AddTask' }">Create Task</router-link>
      <router-link :to="{ name: 'AddCourse' }">Create Course</router-link>
      <router-link :to="{ name: 'AddStudent' }">Create Student</router-link>

    </nav>
    </div>
</template>

<script>
import getUser from '@/composables/getUser'
export default {
setup() {
  const { user } = getUser()
  return { user }
}
}
</script>

<style>

</style>
