<template>
  <div class="items">
    <div v-if="error" class="error">{{ error }}</div>
    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
  <p>Matching Students</p>
  <div v-for="student in students">
    {{student.fname}}
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getmatch from '@/composables/crossreference'

export default {
  name: 'CourseStudents',
  props: ['code'],
  setup(props) {

    const { documents:students, error, load } = getmatch('students', props.code, 'coursecode')
    // load('students', props.code, 'cousecode')

    return { students, error }
  }
}
</script>

<style>


</style>
