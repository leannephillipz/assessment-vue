<template>
  <div class="items">
    <div v-if="error" class="error">{{ error }}</div>
    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
    <h1>{{ student.fname }} {{ student.lname }}</h1>

    <ul class="student grid">
      <li>
        <ul class="flex header">
        <li>Task 1:</li>
          <li>Employment and Industry</li>
          <li>Status</li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
        <li>1.1</li>
          <li>Job Roles</li>
          <li>Pass</li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
          <li>1.2</li>
          <li>Types of employment</li>
          <li>Pass</li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
          <li>1.3</li>
          <li>Evaluation</li>
          <li>referral</li>
          <li></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// import { ref } from 'vue'
import getDocument from '@/composables/getDocument'

export default {
  name: 'Student',
  props: ['slug'],
  setup(props) {
    // console.log(props.slug)
    const { content:student, error, load } = getDocument()
    load('students', props.slug)

    return { student, error }
  },
}
</script>

<style>


</style>
