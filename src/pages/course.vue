<template >
  <main>

    <p>Course - Slug: {{ slug }} </p>
    <!-- <div v-if="error">{{ error }}</div> -->
      <div v-if="course">

      <h1>{{ course.title }} Y{{ course.year }} L{{ course.lvl }}</h1>

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
            <p>{{ item.id }} Learning outcomes: {{ item.outcome }}</p>
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
export default {
  name: 'course',
  props: ['slug'],
    data() {
      return {
        course: []
      }
    },
    mounted(){
      fetch('http://localhost:3000/courses/' + this.slug)
      .then(response => response.json())
      .then(data => this.course = data)
      .catch(err  => console.log(err.messsage))
      console.log(this.course)
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
