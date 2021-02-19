<template>
  <div class="students">
    <p>List of Students:</p>
  </div>
</template>

<script>
// import getStudents from '../composables/getstudents'


export default {
    name: 'students',
    data() {
      return {
        students: [],
        coursecode: "FE123456",
      }
    },
      mounted(){
        console.log(this.students);
      },
      computed: {
        // filteredStudents: () => {
        //   let filtered = getStudents.filter((student) => student.coursecode.includes('FE123456'))
        //   return filtered
        // }
      }
  }
</script>

<style lang="css" scoped>
</style>
