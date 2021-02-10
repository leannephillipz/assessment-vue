<template>
<main>
<h1>Students</h1>


<div v-if="students.length">

  <div class="student grid">
    <ul class="flex colx5 header">
      <li>*</li>
      <li>Fname</li>
      <li>lname</li>
      <li>Group</li>
      <li>Status</li>
    </ul>
  <div v-for="student in students" :key="student.id">
    <router-link :to="{name: 'student', params: { slug: student.id }}">
    <ul class="flex colx5">
      <li><span v-for="flag in student.flags" :key="flag">
        <em v-if="flag">*</em></span></li>
      <li>{{ student.fname }} </li>
      <li>{{ student.lname }}</li>
      <li>{{ student.group }}</li>
      <li>{{ student.status }}</li>
    </ul>
    </router-link>
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
    data() {
      return {
        students: []
      }
    },
      mounted(){
        fetch('http://localhost:3000/students/')
        .then(response => response.json())
        .then(data => this.students = data)
        .catch(err  => console.log(err.messsage))
        console.log(this.students)
      }
    }

</script>
