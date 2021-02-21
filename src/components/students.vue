<template>
  <div class="details">
  <h3>Students</h3>
<p>This isn't working correctly - I don't get the firebase index message in the console.</p>
<p>Course Code to retreive students: {{ code }}</p>

<div v-for="student in students">
<p class="name">{{student.fname}} {{student.lname}}</p>
</div>

  </div>

</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

export default {
   props: ['code'],
   setup(props) {
     // return students who's course code = code

     const students = ref([])
     const error = ref(null)

     const load = async (check) => {
       try {
         const query = await projectFirestore.collection('students').where("coursecode", "==", props.code).get()
         students.value = query.docs.map(doc => {
           console.log(doc.data())
           return { ...doc.data(), id: doc.id }
         })
       }
       catch(err) {
         error.value = err.message
       }
     }

     load(props.code)


     return {students, error}
   }
}
</script>

<style scoped>
</style>
