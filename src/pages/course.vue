<template >
  <main>

    <p>Course - Slug: {{ slug }} </p>
    <!-- <div v-if="error">{{ error }}</div> -->
      <div v-if="course">

      <p>Title: Y{{ course.year }} L{{ course.level }} {{ course.title }}</p>

      <div v-for="project in course.projects" :key="project.id" class="project"><!-- this does not output the data -->
        <p>Project {{ project.number }} : {{ project.title }}</p>
        <p>{{ project.desc }}</p>
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
.project {
  background-color: #213758;
      padding: 1em;
      margin: 1em 0;
}
</style>
