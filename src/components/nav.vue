<template >
    <transition name="fade">
        <nav>
          <ul class="nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/page">Page</router-link></li>
          <li><router-link :to="{ name: 'students'}">Students</router-link></li>
          <li><router-link to="/addstudent">Add Student</router-link></li>
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
