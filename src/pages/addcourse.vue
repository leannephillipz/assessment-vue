<template>
<main>
<h1>Add Student</h1>
      <form @submit.prevent="putdata" class="stacked" >

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


<p>Data: {{ course }}</p>


          <!-- <label for="name">Student ID</label>
          <input type="text" name="sid" value="" class="sid" > -->
        </fieldset>
        <input type="submit" name="" value="Add" class="priority">
      </form>
      <div class="feedback">
        <p>Feedback</p>
      </div>



</main>
</template>






<script>
// import {useRouter} from 'vue-router'

export default {

  // setup() {
  //   const lvl = ref('')
  //   const year = ref('')
  //   const title = ref('')
  //   const abody = ref([])
  //   const qual = ref([])
  //   const subject = ref([])
  //   const qtitle = ref([])
  //
  // }


    data() {
      return {
        lvl: "",
        year: "",
        title: "Games Development",
        awardbody: "University of the Arts London (UAL)",
        qual: "Diploma",
        subject: "Games Development",
        qtitle: "Creative Media Production and Technology Games Development",
        code: "",
        course: "",
        feedback: ""
    }
  },

    methods: {
      putdata() {
        this.course = {"lvl": this.lvl, "year": this.year, "title": this.title, "awardbody": this.awardbody, "qual": this.qual, "subject": this.subject, "qtitle": this.qtitle, "code": this.code}

        // console.log(this.course);
        // const router = useRouter()
        const data = this.course

        async function thedata(data) {
          try {
            await fetch(' http://localhost:3000/courses', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            })
            // useRouter().push({name: 'Home'})
          } catch(err) {
            console.log(err); // TypeError: failed to fetch
          }
        }

        thedata(data);




      }
}

}


</script>

<style scoped>

</style>
