<template>
<main>

  <p>Student</p>
  <div v-if="error">{{ error }}</div>
    <div v-if="student" class="student">
    <h2>{{ student.fname }} {{ student.lname }}</h2>
    <p>SID: {{ student.sid }}</p>
    <p>Group: {{ student.group }}</p>
    <p>Status: {{ student.status }}</p>
    <!-- <p>Flags: {{ student.flags }}</p> -->
    <div v-if="student.flags">
    <p v-for="flag in student.flags" :key="flag">Flags: {{ flag }} </p>
  </div>

    </div>
    <div v-else>
      <p>Loading... </p>
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
    console.log(student)
    return { student, error }
  }

}


</script>
