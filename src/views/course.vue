<template>
  <div class="items">
    <h1>Course</h1>
    <!-- <div v-if="error" class="error">{{ error }}</div> -->

<div class="banner">
  <h2 class="name">{{ course.title }} Level: {{ course.lvl }} Year: {{ course.year }}</h2>
  <p>Course Code: {{ course.code }}</p>
  <p>Industry / Subject: {{ course.subject }}</p>
  <p>Awarding Body: {{ course.awardbody }}</p>
</div>


<div class="links">
    <router-link :to="{ name: 'CourseStudents', params: { code: course.code, course: course.short }}" class="btn">
      View Students Data
    </router-link>

    <router-link :to="{ name: 'Projects'}" class="btn secondary">
      View Projects
    </router-link>
    <router-link :to="{ name: 'Assessment', params: { code: course.code, course: course.short }}" class="btn secondary">
      Assessment Criteria
    </router-link>

    </div>


    <!-- <students :coursecode='code'/> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import getDocument from '@/composables/getDocument'
import students from '@/components/students.vue'

export default {
  name: 'Course',
  props: ['code'],
  components: { students },
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
    return { course }

  }
}
</script>

<style scoped>
.banner {
    display: block;
    margin-right: 1em;
    text-transform: capitalize;
    border: solid 1px #676767;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
  }

  h2 {
    color: coral;
    font-size: 1.3rem;
    border-bottom: 1px solid coral;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }


</style>
