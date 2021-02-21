<template>
  <div class="items">
    <div v-if="error" class="error">{{ error }}</div>
    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
    <p>Course</p>
    <p class="name">{{ course.title }}</p>
    <p>Indusrty / Subject: {{ course.subject }}</p>
    <p>Level: {{ course.lvl }}</p>
    <p>Year: {{ course.year }}</p>
    <p>Code: {{ course.code }}</p>
    <p>Awarding Body: {{ course.awardbody }}</p>

    <students :students="data"/>
  </div>
</template>

<script>
// import { ref } from 'vue'
import getDocument from '@/composables/getDocument'
import students from '@/components/students'

export default {
  name: 'Course',
  props: ['code'],
  components: {students},
  setup(props) {
    // console.log(props.slug)
    const data = {
      "1": {
        "name": "bugs"
      },
      "2": {
        "name": "Daffy"
      }
    }
    const { content:course, error, load } = getDocument()
    load('courses', props.code, 'code')
    // console.log(course.value)
    return { course, error, students, data }
  },
}
</script>

<style>


</style>
