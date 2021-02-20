<template>
  <div class="items">
    <div v-if="error">{{ error }}</div>
    <p>student</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Students',
  components: {  },
  setup() {
    const { content:student, error, load } = getCollection()

    load('students')

    return { student, error }
  },
}
</script>

<style>


</style>
