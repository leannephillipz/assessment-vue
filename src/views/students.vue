<template>
  <div class="items">
    <div v-if="error">{{ error }}</div>
    <div v-for="student in students" class='item'>
      <p class="name">{{ student.fname }} {{ student.lname }}</p>


    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Students',
  components: {  },
  setup() {
    const { content:students, error, load } = getCollection()

    load('students')

    return { students, error }
  },
}
</script>

<style>


</style>
