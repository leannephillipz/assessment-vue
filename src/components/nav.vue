<template >
    <transition name="fade">
        <nav>
          <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/grade">Grade</router-link></li>
          <li><router-link :to="{ name: 'students'}">Students</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
        </ul>
        <hr>
        <ul>
          <li><router-link to="/addstudent">Add Student</router-link></li>
          <li><router-link to="/addcourse">Add Course</router-link></li>
        </ul>
        </nav>
    </transition>
</template>


<script>

export default {
    name: 'Menu',
      data: function() {
        return {

        }
      }
  }

</script>

<style>
</style>
