<template>

  <h1>{{course}} Students</h1>
  <div v-if="error">{{ error }}</div>

    <ul class="students grid">
      <li>
        <ul class="flex header">
        <li>*</li>
          <li>Fname</li>
          <li>lname</li>
          <li>Group</li>
          <li>Status</li>
          <li></li>
          <li></li>
        </ul>
      </li>
    <li v-for="student in students" class='item' :key="student.id">
      <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
        <ul class="flex ">
          <li >
            <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
          <li>{{ student.fname }} </li>
          <li>{{ student.lname }}</li>
          <li>{{ student.group }}</li>
          <li>
            <span v-if="student.status" class="pill" :class="student.status">{{ student.status }}</span>
            <!-- <span v-else class="pill"> not graded </span> -->
          </li>
          <li></li>
          <li></li>
        </ul>
      </router-link>
  </li>
  </ul>



  <!-- <div class="items">
    <h1>Matching Students</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <p>Student {{ $route.params.slug }} {{ props.slug }}</p>

  <div v-for="student in students">
    {{student.fname}}
  </div>
  </div> -->



</template>

<script>
import { ref } from 'vue'
import getmatch from '@/composables/crossreference'

export default {
  name: 'CourseStudents',
  props: ['code', 'course'],
  setup(props) {

    const { content:students, error } = getmatch('students', props.code, 'coursecode')
    // load('students', props.code, 'cousecode')
    // console.log(props.course)

    return { students, error, course:props.course }
  }
}
</script>

<style>


</style>
