<template>
<main>
<p>Projects</p>
<div v-if="error">{{ error }}</div>

<div v-if="projects">
<ul v-for="project in projects" :key="project.id" class="projects">
  <li class="name">
    <p>Project {{ project.number }}: {{ project.title }}  </p>
    <p>{{ project.desc }}</p>
    <p>Tasks:</p>
    <div v-for="task in project.tasks" :key="task.id" class='pill'>{{ task.title }}</div>
  </li>
</ul>
</div>
<div v-else>
  <p>Loading... </p>
</div>
</main>
</template>



<script>

import getProjects from '../composables/getprojects'


export default {
  setup() {
    const { projects, error, load } = getProjects()
    load()

    return { projects, error }
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
