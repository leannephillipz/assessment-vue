<template>
  <div class="items">
    <div v-if="error" class="error">{{ error }}</div>
    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
    <p>Student</p>
    <p class="name">{{ student.fname }} {{ student.lname }}</p>
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
