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
    <div >
    <p v-if="student.flags ">Flags: <span v-for="flag in student.flags" :key="flag"> <em>{{ flag }} </em></span> </p>
    <p v-if="student.notes">Notes: <span v-for="note in student.notes" :key="note"> <em>{{ note }} </em></span> </p>
    <p v-if="student.warnings">Warnings: <span v-for="warning in student.warnings" :key="warning"> <em>{{ warning }} </em></span> </p>
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
    // let studentdata = JSON.stringify(student.value) //can't use lenght on an object but can't change to an array.
    console.log(student)
    return { student, error }
  }

}


</script>

<style scoped>

em {display: inline-block;
    margin-right: 0.5em;}
</style>
