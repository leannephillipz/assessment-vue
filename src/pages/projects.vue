<template>
<main>
<h1>Projects</h1>
<!-- <div v-if="err">{{ err }}</div> -->

<!-- <div v-if="projects">
<ul v-for="project in projects" :key="project.id" class="projects">
  <li class="name">
    <h2 @click="showDetails = !showDetails" >Project {{ project.number }}: {{ project.title }}  </h2>
    <div class="desc" :class="{ show: showDetails }">
      <p>{{ project.desc }}</p>
      <p>Tasks:</p>
      <div v-for="task in project.tasks" :key="task.id" class='pill'>{{ task.title }}</div>
    </div>
  </li>
</ul>
</div>
<div v-else>
  <p>Loading... </p>
</div> -->
</main>
</template>



<script>
// import { ref } from 'vue'
// import getProjects from '../composables/getprojects'
//
//
// export default {
//   setup() {
//       const showDetails = ref('')
//     const { projects, error, load } = getProjects()
//     load()
//     console.log(showDetails)
//     return { projects, error, showDetails }
//   }
// }


export default {
  data() {
    return {
      showDetails: false,
      projects: [],
    }
  },
  mounted() {
    // fetch('http://localhost:3000/projects')
    //   .then(res => res.json())
    //   .then(data => this.projects = data)
    //   .then(console.log(this.projects))
    //   .catch(err => console.log(err))
  },
  methods: {
  }

};

</script>






<style scoped>


</style>
