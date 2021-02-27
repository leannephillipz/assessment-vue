<template>
<div v-if="error">{{error}}</div>
<div id="1" >
  <h3>Select Course:</h3>
  <div v-for="course in courses" class='item' :key="course.id">
      <p class="btn" @click="getStudents({title: course.title, code: course.code})">{{ course.title }}</p>
  </div>
</div>

<div id="2" >
  <h2>{{course.title}}</h2>
  <h3>Select Student:</h3>
  <div v-for="student in filteredstudents" class='item' :key="student.id">
      <p class="btn">{{ student.fname }} {{ student.lname }}</p>
  </div>
</div>

<!-- <div id="3" v-if="showdata == 3">
  <h3>Select Task</h3>
  <p>Course 1</p> <p>Course 2</p>
</div> -->

</template>

<script>

import { projectFirestore } from '@/firebase/config'

export default {
  data(){
    return {
      course:  [],
      courses: [],
      error: '',
      // showdata: 1,
      students: []
    }
  },
  mounted() {
    const collectdata = () => {
      projectFirestore.collection("courses").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.courses.push({ ...doc.data(), id: doc.id })
          // console.log(doc.id, " => ", doc.data());
          // console.log(this.courses)
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    projectFirestore.collection("students").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.students.push({ ...doc.data(), id: doc.id })
        // console.log(doc.id, " => ", doc.data());
        // console.log(this.students)
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

    }
    collectdata()


  },
  methods: {
    getStudents(data) {
      // console.log(data.code)
      this.course = data
        // this.showdata = 2
      }
  },
  computed: {
    filteredstudents(){
      return this.students.filter(student => {
       return student.coursecode.includes(this.course.code)})
    }
  }

}
</script>
