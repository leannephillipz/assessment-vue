<template>
  <div class="items">
    <div v-if="error">{{ error }}</div>
    <p class="note"> will add task numbers in seperatly so that we can reorganise them</p>
    <div v-for="task in tasks" class='item' :key="task.title">
      <h3>{{ task.title }}:</h3>
      <p>{{ task.desc }}</p>

      <div v-for="items in task.items" :key="items.title" class="details">
        {{ items.title }} : {{ items.text }}
      </div>


    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Tasks',
  components: {  },
  setup() {
    const { content:tasks, error, load } = getCollection()

    load('tasks')

    return { tasks, error }
  },
}
</script>

<style>


</style>
