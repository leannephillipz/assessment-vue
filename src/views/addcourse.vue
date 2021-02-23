<template>

<h1>Add Course</h1>
<p>not set up yet</p>
      <form @submit.prevent="handleSubmit" class="stacked" >

        <fieldset>
          <label for="year">Year</label>
          <input v-model="year" type="text" name="year">
          <label for="level">Level</label>
          <input v-model="lvl" type="text" name="lvl">
          <label for="awardingbody">Awarding Body</label>
          <input v-model="awardbody" type="text" name="awardbody">
          <label for="qual">Qualification</label>
          <input v-model="qual" type="text" name="qual">
          <label for="subject">Subject</label>
          <input v-model="subject" type="text" name="subject">
          <label for="title">Short Title</label>
          <input v-model="title" type="text" name="title">
          <label for="qtitle">Qualification Title</label>
          <input v-model="qtitle" type="text" name="qtitle">
          <label for="code">Course Code</label>
          <input v-model="code" type="text" name="code">


<!-- <p>Data: {{ course }}</p> -->


          <!-- <label for="name">Student ID</label>
          <input type="text" name="sid" value="" class="sid" > -->
        </fieldset>
        <input type="submit" name="" value="Add" class="priority">
      </form>
      <div class="feedback">
        <p>Feedback</p>
      </div>



</template>






<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
  setup() {
    const year = ref('')
    const lvl = ref('')
    const awardbody = ref('')
    const qual = ref('')
    const subject = ref('')
    const title = ref('')
    const qtitle = ref('')
    const code = ref('FEL3Y1GD2020')



    const router = useRouter()


    const handleSubmit = async () => {
      const data = {
        year: year.value,
        lvl: lvl.value,
        awardbody: awardbody.value,
        qual: qual.value,
        subject: subject.value,
        title: title.value,
        qtitle: qtitle.value,
        code: code.value
      }
      // await fetch('http://localhost:3000/students', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(student)
      // })

      const res = await projectFirestore.collection('courses').add(data)
      // console.log(res)
      router.push({name: 'Home'})
    }


    return {year, lvl, awardbody, qual, subject, title, qtitle, code, handleSubmit}
  }
}


</script>

<style scoped>

</style>
