<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <div v-if="error">{{ error }}</div>
    <p class="note">Need to adjust ordering</p>
    <p class="note">Note: will add task numbers in seperatly so that we can reorganise them</p>
    <div v-for="task in tasks" class='items' :key="task.title">
      <h3>{{ task.title }}</h3>
      <p>{{ task.desc }}</p>

      <div v-for="items in task.items" :key="items.title" class="item">
        <div class="">
          <p>{{ items.title }}</p>
          <p class="small">{{ items.text }}</p>
        </div>
        <div class="icon">
          <img  src="../assets/icons/more_vert-24px.svg">
        </div>
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
