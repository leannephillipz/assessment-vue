<template>
  <div class="items">
    <div v-if="error">{{ error }}</div>
    <div v-for="course in courses" class='item'>
      <p class="name">{{ course.lvl }} {{ course.year }} {{ course.title }}</p>


    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Courses',
  components: {  },
  setup() {
    const { content:courses, error, load } = getCollection()

    load('courses')

    return { courses, error }
  },
}
</script>

<style>


</style>
