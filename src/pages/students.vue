<template>
<main>
<p>Students</p>
<div v-if="error">{{ error }}</div>
<div v-if="students.length">
<ul v-for="student in students" :key="student.id">
  <router-link :to="{name: 'student', params: { slug: student.id }}">
  <li class="name">{{ student.fname }} {{ student.lname }}</li>
  </router-link>
</ul>
</div>
<div v-else>
  <p>Loading... (Fake Delay set up could add loader)</p>
</div>
</main>
</template>



<script>
// import { computed, onMounted, onUnmounted, onUpdated } from 'vue'
// import { ref } from 'vue'
import getStudents from '../composables/getstudents'

// import studata from '~/data/students.json'
//
// export default {
//   name: 'home',
//   setup() {
//     const students = ref([
//         // { fname: 'bugs', lname:'bunny', sid:'56454' },
//         // { fname: 'daffy', lname:'duck', sid:'47864' }
//       ])
//       students.value = studata;
//       return { students };
//   }
//
// }

export default {
  setup() {
    const { students, error, load } = getStudents()
    load()

    return { students, error }
  }
}


</script>
