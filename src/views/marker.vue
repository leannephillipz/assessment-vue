<template>

<div id="1" v-if="showdata == 1">
  <h3>Select Course:</h3>
  <div v-for="course in courses" class='item' :key="course.id">
      <p class="btn" @click="getStudent({title: course.title, code: course.code})">{{ course.title }} <span>L{{ course.lvl }} Y{{ course.year }}</span></p>
  </div>
</div>

<div id="2" v-if="showdata == 2">
  <h2>{{course.title}}</h2>
  <h3>Select Student:</h3>
  <div v-for="student in students" class='item' :key="student.id">
      <p class="btn">{{ student.fname }} {{ student.lname }}</p>
  </div>
</div>

<div id="3" v-if="showdata == 3">
  <h3>Select Task</h3>
  <p>Course 1</p> <p>Course 2</p>
</div>

</template>

<script>
import { ref, computed } from 'vue'
import getCollection from '../composables/getCollection'
import getmatch from '@/composables/crossreference'

export default {
  setup() {
    const showdata = ref(1)
    const course = ref('')
    const student = ref('')
    const students = ref()

    const { content:courses, collect:getcouses } = getCollection()
    getcouses('courses')

    // const { content:students, collect:getstudents } = getCollection()


    // const dosomething = async () => {
    //   try {
    //     //do it
    //   }
    //   catch(err) {
    //   //error
    //   }
    // }

// just use a filter??


    const getStudent = async (data) => {
      course.value = data
        console.log(course.value)
        showdata.value = 2
         const { content, error } = await getmatch('students', course.value.code, 'coursecode' )
        students.value = content.value
        console.log(students.value)
      }



    return {showdata, course, student, courses, getStudent, students}
  },
  // methods: {
  //   getStudents(message) {
  //       console.log(message)
  //     }
  // }

}
</script>
