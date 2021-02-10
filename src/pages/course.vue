<template >
  <main>

    <p>Course - Slug: {{ slug }} </p>
    <!-- <div v-if="error">{{ error }}</div> -->
      <div v-if="course">

      <p>Title: {{ course.title }}</p>

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
