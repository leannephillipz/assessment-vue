<template>
<main>
<h1>Projects</h1>
<div v-if="error">{{ error }}</div>

<div v-if="projects">
<ul v-for="project in projects" :key="project.id" class="projects">
  <li class="name">
    <h2 @click="showDetails = !showDetails" >Project {{ project.number }}: {{ project.title }}  </h2>

    <div v-if="showDetails" class="desc">
      <p>{{ project.desc }}</p>
      <p>Tasks:</p>
      <div v-for="task in project.tasks" :key="task.id" class='pill'>{{ task.title }}</div>
    </div>


  </li>
</ul>
</div>
<div v-else>
  <p>Loading... </p>
</div>
</main>
</template>



<script>
import { ref } from 'vue'
import getProjects from '../composables/getprojects'


export default {
  setup() {
      const showDetails = ref('')
    const { projects, error, load } = getProjects()
    load()
    console.log(showDetails)
    return { projects, error, showDetails }
  }
}


</script>

<style scoped>

.projects li {
  margin-bottom: 1em ;
  padding: 1em;
  border: solid 1px gray;
}

.pill {
  border-radius: .5em;
  background:gray;
}
</style>
