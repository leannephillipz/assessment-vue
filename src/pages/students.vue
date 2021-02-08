<template>
<main>
<h1>Students</h1>
<div v-if="error">{{ error }}</div>

<div v-if="students.length">

  <div class="student grid">
    <ul class="flex colx5 header">
      <li>*</li>
      <li>Fname</li>
      <li>lname</li>
      <li>Group</li>
      <li>Status</li>
    </ul>
  <div v-for="student in students" :key="student.id">
    <router-link :to="{name: 'student', params: { slug: student.id }}">
    <ul class="flex colx5">
      <li>*</li>
      <li>{{ student.fname }} </li>
      <li>{{ student.lname }}</li>
      <li>{{ student.group }}</li>
      <li>{{ student.status }}</li>
    </ul>
    </router-link>
  </div>
  </div>



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
