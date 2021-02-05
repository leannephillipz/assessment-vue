<template>
<main>

  <p>Student - Slug: {{ slug }} </p>
  <div v-if="error">{{ error }}</div>
    <div v-if="student" class="student">
    <p>{{ student.fname }} {{ student.lname }}</p>
    </div>
    <div v-else>
      <p>Loading... (Fake Delay set up could add loader)</p>
    </div>
<!-- <div v-else>
  Trying to get data, but we don't have an error.
</div> -->
</main>
</template>



<script>
// @ is an alias to /src
import getStudent from '../composables/getstudent'

export default {
  name: 'student',
  props: ['slug'],
  setup(props) {
    const { student, error, load } = getStudent(props.slug)
    load()
    // console.log(student)
    return { student, error }
  }

}


</script>
