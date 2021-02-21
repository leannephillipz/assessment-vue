<template>

<h3>Add Student</h3>

      <form @submit.prevent="handleSubmit" class="stacked" >

        <fieldset>
          <label for="fname">First Name</label>
          <input v-model="fname" type="text" name="fname" class="fname">
          <label for="lname">Last Name</label>
          <input v-model="lname" type="text" name="lname" class="lname">
          <label for="lname">Group</label>
          <input v-model="group" type="text" name="group" class="group">
          <label for="lname">CourseCode</label>
          <input v-model="coursecode" type="text" name="group" class="group">
          <!-- <label for="name">Student ID</label>
          <input type="text" name="sid" value="" class="sid" > -->
        </fieldset>

        <div v-for="flag in flags" :key="flag" class="pill">
        #{{ flag }}</div>
        <label for="flag">Flags - Hit enter to add a new tag before submitting.</label>
        <input v-model="flag" type="text" name="flag" class="flag" @keydown.enter.prevent="handleKeydown">


        <input type="submit" name="" value="Add" class="priority">
      </form>


</template>



<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
  setup() {
    const fname = ref('')
    const lname = ref('')
    const flag = ref('')
    const flags = ref([])
    const group = ref('')
    const status = ref('')
    const coursecode = ref('FEL3Y1GD2020')



    const router = useRouter()

    const handleKeydown = () => {
      if (!flags.value.includes(flag.value))
        flag.value = flag.value.replace(/\s/, '').toUpperCase() // remove whitespace
        flags.value.push(flag.value)
        flag.value = ''
      }

    const handleSubmit = async () => {
      const student = {
        fname: fname.value,
        lname: lname.value,
        flags: flags.value,
        group: group.value,
        status: status.value,
        coursecode: coursecode.value
      }
      // await fetch('http://localhost:3000/students', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(student)
      // })

      const res = await projectFirestore.collection('students').add(student)
      // console.log(res)
      router.push({name: 'Home'})
    }


    return {fname, lname, flags, flag, group, status, coursecode, handleKeydown, handleSubmit}
  }
}


</script>

<style>
.feedback {}

  .pill {
    border-radius: .5em;
    background: #7da017;
    display: inline-block;
    padding:0.5em;
    margin-right: .3em;
  }
</style>
