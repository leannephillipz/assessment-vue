<template>
    <h3>Students</h3>
    <!-- <div v-if="error">{{ error }}</div> -->
    <p class="note">I don't now why I can't get this to work as a compondent.</p>
    <p class="note">maybe I need to pass in ALL the student data as a prop instead of passing as a value to query.</p>
    <p class="note">Can't pass the whole object</p>
      <ul class="students grid">
        <li>
          <ul class="flex header">
          <li>*</li>
            <li>Fname</li>
            <li>lname</li>
            <li>Group</li>
            <li>Status</li>
            <li></li>
          </ul>
        </li>
      <li v-for="student in students" class='item' :key="student.id">
        <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
          <ul class="flex ">
            <li >
              <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
            <li><span v-if="student.aka">({{ student.aka }}) </span>{{ student.fname }} </li>
            <li>{{ student.lname }}</li>
            <li>{{ student.coursecode }}</li>
            <li><span v-if="student.status" class="pill" :class="student.status">{{ student.status }}</span></li>
            <li></li>
          </ul>
        </router-link>
    </li>
    </ul>




    <!-- <div v-for="student in students" class='item' :key="student.id">
      <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
        <p class="name">{{ student.fname }} {{ student.lname }} - Group: {{ student.group }} <span v-if="student.status">- Status: {{ student.status }}</span></p>

    </div> -->

</template>

<script>
import { ref } from 'vue'
// import collector from '@/composables/collector.js'
import getCollection from '@/composables/getCollection.js'



export default {
  name: 'Students',
  props: ['coursecoderef'],
  setup(props) {

    // console.log(props.coursecode)

    // const { content:students, error } = collector('students', 'fname', 'coursecode', props.coursecoderef)
    // const { content:students, error } = collector('students')

    const { content:students, error, collect } = getCollection() // don't know why this one works but the other one doesn't - although I am able to console.log the data
    collect('students')
    return { students }

  },
}
</script>

<style>


</style>
