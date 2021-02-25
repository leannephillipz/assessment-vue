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
      <li v-for="student in students" class='item' :key="student.id">
        <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
          <ul class="flex ">
            <li >
              <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
            <li>{{ student.fname }} </li>
            <li>{{ student.lname }}</li>
            <li>{{ student.group }}</li>
            <li><span v-if="student.status">{{ student.status }}</span></li>
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
import getCollection from '@/composables/getCollection'

export default {
  name: 'Students',
  components: {  },
  setup() {
    const { content:students, error, collect } = getCollection()

    collect('students')

    return { students, error }
  },
}
</script>

<style>


</style>
