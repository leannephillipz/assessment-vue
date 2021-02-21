<template>
  <div class="items">
    <div v-if="error">{{ error }}</div>
    <div v-for="student in students" class='item' :key="student.id">
      <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
        <p class="name">{{ student.fname }} {{ student.lname }} - Group: {{ student.group }} - Status: {{ student.status }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '@/composables/getCollection'

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
