<template>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Tasks' }">Tasks</router-link>
      <router-link :to="{ name: 'Students' }">Students</router-link>
      <router-link :to="{ name: 'Courses' }">Courses</router-link>
      <hr>
      <router-link :to="{ name: 'AddTask' }">Create Task</router-link>
      <router-link :to="{ name: 'AddCourse' }">Create Course</router-link>
      <router-link :to="{ name: 'AddStudent' }">Create Student</router-link>

    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
