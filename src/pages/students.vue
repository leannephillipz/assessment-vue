<template>
<main>
<h1>Students</h1>


<div v-if="students.length">

  <div class="student grid">
    <ul class="flex colx5 header">
      <li>*</li>
      <li>Fname</li>
      <li>lname</li>
      <li>Group</li>
      <li>Status</li>
      <li>Warnings</li>
    </ul>

  <div v-for="student in students" :key="student.id">
    <router-link :to="{name: 'student', params: { slug: student.id }}">
    <ul class="flex colx5">
      <li><span v-for="flag in student.flags" :key="flag">
        <em v-if="flag">*</em></span></li>
      <li>{{ student.fname }} </li>
      <li>{{ student.lname }}</li>
      <li>{{ student.group }}</li>
      <li>{{ student.status }}</li>
      <li> <span v-if="student.warnings"> W</span></li>
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
import getStudents from '@/composables/getStudents'

export default {
  setup() {
    const { students, error, load } = getStudents()
    load()

    return { students, error }
  }
}



</script>
