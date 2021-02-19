<template >
  <main>

    <p>Course - Slug: {{ slug }} </p>
    <!-- <div v-if="error">{{ error }}</div> -->
      <div v-if="course">

      <h1>{{ course.title }} Y{{ course.year }} L{{ course.lvl }}</h1>

      <students/>

      <h2>Projects</h2>
      <div v-for="project in course.projects" :key="project.id" class="project">
        <p>Project {{ project.number }} : {{ project.title }}</p>
        <p>{{ project.desc }}</p>
      </div>

      <h2>Assessment</h2>

      <div v-for="assessment in course.assessment" :key="assessment.id" class="courseassessment">
        <p>Assessment board: {{ assessment.board }}</p>
        <div v-for="units in assessment.units" :key="units.id" class="units">
            <div v-for="unit in units" :key="unit.id" class="unit">
            <p>Unit ID:{{ unit.id }}</p>
            <div v-for="item in unit.items" :key="item.id">
            <p>ID: {{ item.id }}<br> Learning outcome: {{ item.outcome }}</p>
          </div>
          </div>
        </div>
      </div>



      </div>
      <div v-else>
        <p>Loading... (Fake Delay set up could add loader)</p>
      </div>

  </main>
</template>

<script>
// @ is an alias to /src
import getDocument from '@/composables/getDocument'
// import {useRouter} from 'vue-router'
// import { projectFirestore } from '../firebase/config'


export default {
  name: 'course',
  props: ['slug'],
  setup(props) {
    // const router = useRouter()
    const { details:course, error, load  } = getDocument(props.slug)
    load('courses')

    return { course, error }
  }

}


</script>

<style scoped>
.project, .unit{
  background-color: #393b3e;
      padding: 1em;
      margin: 1em 0;
}
</style>
