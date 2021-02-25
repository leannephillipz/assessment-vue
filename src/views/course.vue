<template>
  <div class="items">
    <h1>Course</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
    <p class="name">{{ course.title }} Level: {{ course.lvl }} Year: {{ course.year }}</p>
    <p>Code: {{ course.code }}</p>
    <p>Industry / Subject: {{ course.subject }}</p>
    <p>Awarding Body: {{ course.awardbody }}</p>
    <router-link :to="{ name: 'CourseStudents', params: { code: course.code, course: course.short }}" class="btn">
      View Students Data
    </router-link>

    <router-link :to="{ name: 'Tasks'}" class="btn secondary">
      View Tasks
    </router-link>
    <router-link :to="{ name: 'Assessment'}" class="btn secondary">
      Assessment Criteria
    </router-link>


    <!-- <students :coursecode='code'/> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import getDocument from '@/composables/getDocument'
// import students from '@/components/students'

export default {
  name: 'Course',
  props: ['code'],
  // components: {students},
  setup(props) {

  //   const data = [
  //     {
  //       "fname": "bugs"
  //   },
  //   {
  //     "fname": "daffy"
  // }
  //
  //   ]

    const { content:course, error, load } = getDocument()
    load('courses', props.code, 'code')
    return { course, error }

  }
}
</script>

<style>


</style>
