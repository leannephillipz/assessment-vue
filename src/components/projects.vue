<template>


  <div class="projects">
      <p>Projects:</p>
      <div v-for="project in projects" class='item' :key="project.id">
        <!-- {{project}} -->
          <p class="btn" @click="next(3, {projectuid: project.uid, projecttitle: project.title, projectdesc: project.desc})">Project: {{ project.uid }} {{ project.title }}</p>
      </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import getDocument from '@/composables/getDocument'

export default {
  name: 'Projectscomp',
  setup(props) {


    const projects = ref([]);

    projectFirestore.collection("projects")
    .orderBy('order')
    .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          projects.value.push({...doc.data(), id: doc.id
          })
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });



    return { projects }

  }
}
</script>

<style scoped>
.banner {
    display: block;
    margin-right: 1em;
    text-transform: capitalize;
    border: solid 1px #676767;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
  }

  h2 {
    color: coral;
    font-size: 1.3rem;
    border-bottom: 1px solid coral;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }


</style>
