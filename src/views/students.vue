<template>

    <h1>Students</h1>
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
          </ul>
        </li>
      <li v-for="student in sortedStudents" class='item' :key="student.id">
        <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
          <ul class="flex ">
            <li >
              <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
            <li><span v-if="student.aka">({{ student.aka }}) </span>{{ student.fname }} </li>
            <li>{{ student.lname }}</li>
            <!-- <li>{{ student.coursecode }}</li> -->
              <li>{{ student.group }}</li>
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
import { ref, computed } from 'vue'
import getCollection from '@/composables/getCollection'

export default {
  name: 'Students',
  components: {  },
  setup() {
    const { content:students, error, collect } = getCollection()

    collect('students')
    // const sortedStudents = students.sort(
    //   function(a, b){return a.group - b.group}
    // )
  //
  //   function sortedStudents(...students){
  //    return students.sort(function(a,b){
  //      return a.group - b.group;
  //    });
  // }

    // const sortedStudents = students.group.sort(
    //   function(a, b){return a.group - b.group}
    // )

    //can't sort
      const sortedStudents = students
    // const sortedStudents = computed((...students) => {
    //   return students.sort(
    //     function(a, b){return a - b}
    //   )
    // })

    return { students, error, sortedStudents }
  },
  // computed: {
  //   sortedStudents(...students){
  //      return students.sort(function(a,b){
  //        return a.group - b.group;
  //      })
  //   }
  //
  // }
}
</script>

<style>


</style>
