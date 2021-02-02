<template>
<main>
<p>Students</p>
<ul v-for="student in students" :key="student.id">
  <router-link :to="{name: 'student', params: { slug: student.sid }}">
  <li class="name">{{ student.fname }} {{ student.lname }}</li>
  </router-link>
</ul>
</main>
</template>



<script>
import studata from '@/data/students.json'

export default {
  name: 'home',
  data() {
    return {
      students: [
        // { fname: 'bugs', lname:'bunny', sid:'56454' },
        // { fname: 'daffy', lname:'duck', sid:'47864' }
      ]
    }
  },
  mounted() {
    this.students = studata
  }

}


</script>
