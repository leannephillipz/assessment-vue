<template>
  <div class="items">
      <div v-if="error">{{ error }}</div>
      <div v-for="course in courses" class='item' :key="course.id">

        <router-link :to="{ name: 'Course', params: { code: course.code  }}">
        <p class="name">{{ course.title }} - Level {{ course.lvl }} - year {{ course.year }}</p>
        </router-link>
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
