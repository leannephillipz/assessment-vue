<template>
  <div class="student">
    <div v-if="error" class="error">{{ error }}</div>

    <!-- <p>Student {{ $route.params.slug }} {{ props.slug }}</p> -->
    <h1>{{ student.fname }} {{ student.lname }}</h1>


    <p>Student ID: {{ student.sid }}</p>
    <p>Date of Birth: {{ student.dob }} Age: {xx}</p>
    <a :href="student.email" class="btn">Email Student</a>
    <a href="" class="btn secondary">View Assessment Sheet</a>


    <h3>Summary</h3>
    <p >Status : <span class="pill" :class="student.status">{{ student.status }}</span> </p>
    <div class="tasks">
      <p class="note">Going to put some kind of summary here, possibly pulling refered tasks only and key data</p>
      <p class="note">In Dev - need to pull and cross reference data</p>


<template v-for="(data, name, index) in student.tasks" :key="index">
<div>
  <p>Task {{name}}: {{data.grade}}</p>
  <p>{{data.feedback}}</p>
</div>

 </template>

    <!-- <div v-for="task in tasks" class='items' :key="task.title">
      <h4>Task {{ task.order }} : {{ task.title }}</h4>
      <div v-for="item in task.items" :key="item" class="item">
        <div class="">
          <p>{{ item.title }} : Unit {{ item.unit }} : Item {{ item.uitem }} </p>
        </div>
        <div class="icon">
          <img  src="../assets/icons/more_vert-24px.svg">
        </div>
      </div>
    </div> -->
    </div>

    <!-- <ul class="student grid">
      <li>
        <ul class="flex header">
        <li>Task 1:</li>
          <li>Employment and Industry</li>
          <li>Status</li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
        <li>1.1</li>
          <li>Job Roles</li>
          <li><span class="pill pass">pass</span></li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
          <li>1.2</li>
          <li>Types of employment</li>
          <li><span class="pill pass">pass</span></li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="flex">
          <li>1.3</li>
          <li>Evaluation</li>
          <li><span class="pill referral">referral</span></li>
          <li></li>
        </ul>
      </li>
    </ul> -->



  </div>
</template>

<script>
import { computed } from 'vue'
import getCollection from '../composables/getCollection'
import getDocument from '@/composables/getDocument'

export default {
  name: 'Student',
  props: ['slug'],
  setup(props) {
    // console.log(props.slug)
    const { content:student, error, load } = getDocument()
    load('students', props.slug)
    const { content:tasks, collect } = getCollection()
    collect('tasks', 'order')

    // computed(() =>  student.value.email = "mailto:" + student.value.sid + "@student.gbmc.ac.uk")




    return { student, error, tasks }
  },
  computed: {
    // emaillink(){
    //   const emaillink = "mailto:" + student.sid + "@student.gbmc.ac.uk"
    //   console.log(emaillink.value)
    // }

    }
}
</script>

<style>


</style>
