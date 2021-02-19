<template>
<main>
<h1>Courses</h1>

<div class="grid">
<ul class="flex colx3 header">
  <li>Level</li>
  <li>Year</li>
  <li>Title</li>
</ul>

<div v-if="courses">
  <div v-for="course in courses" :key="course.id"><!-- this does not output the data -->
    <router-link :to="{name: 'course', params: { slug: course.id }}">
    <ul class="flex colx3">
      <li>{{ course.lvl }}</li>
      <li>{{ course.year }}</li>
      <li>{{ course.title }}</li>
    </ul>
    </router-link>
  </div>
</div>

<div v-else>
  <p>Loading... </p>
</div>

</div>


</main>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  setup() {
    const { details:courses, error, load } = getCollection('courses')
    load('courses')
    return { error, courses }
  }
}



</script>
