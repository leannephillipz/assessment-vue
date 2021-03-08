<template>
  <div class="tasks details">
    <h1>Tasks</h1>
    <div v-if="error">{{ error }}</div>
    <div v-for="task in tasks" class='items' :key="task.id">
      <div class="task">
        <h3>Task {{ task.order }} : {{ task.title }} <router-link :to="{ name: 'EditTask', params: { slug: task.id  } }" class="icon"><img  src="../assets/icons/more_vert-24px.svg"></router-link> </h3>
        <h4>{{ task.desc }}</h4>
      </div>



      <div v-for="items in task.items" :key="items.title" class="item">
        <div class="">
          <p>{{ task.order }}.{{ items.number }} {{ items.title }}</p>
          <p class="small">{{ items.text }}</p>
        </div>
        <div class="icon">
          .
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
    const { content:tasks, error, collect } = getCollection()

    collect('tasks', 'order')

    return { tasks, error }
  },
}
</script>

<style>



</style>
