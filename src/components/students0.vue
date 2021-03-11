<template>
    <h3>Students</h3>
    <!-- <div v-if="error">{{ error }}</div> -->
<p class="note">I can console log students but they don't apear here: {{ students}}</p>

      <ul class="students grid">
        <li>
          <ul class="flex header">
          <li>*</li>
            <li>Fname</li>
            <li>lname</li>
            <li>Group</li>
            <li>Status</li>
            <li></li>
          </ul>
        </li>
      <li v-for="student in students" class='item' :key="student.id">
        <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
          <ul class="flex ">
            <li >
              <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
            <li><span v-if="student.aka">({{ student.aka }}) </span>{{ student.fname }} </li>
            <li>{{ student.lname }}</li>
            <li>{{ student.coursecode }}</li>
            <li><span v-if="student.status" class="pill" :class="student.status">{{ student.status }}</span></li>
            <li></li>
          </ul>
        </router-link>
    </li>
    </ul>




    <!-- <div v-for="student in students" class='item' :key="student.id">
      <router-link :to="{ name: 'Student', params: { slug: student.id  }}">
        <p class="name">{{ student.fname }} {{ student.lname }} - Group: {{ student.group }} <span v-if="student.status">- Status: {{ student.status }}</span></p>

    </div> -->

</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
// import collector from '@/composables/collector.js'
// import getCollection from '@/composables/getCollection.js'



export default {
  name: 'Students',
  props: ['coursecoderef'],
  setup(props) {


    const content = ref([])
    const error = ref(null)
    const students = ref([])

    // console.log(props.coursecode)

    // const { content:students, error } = collector('students', 'fname', 'coursecode', props.coursecoderef)
    // const { content:students, error } = collector('students')

    const collector = async (collection, orderkey, query, match) => {

      try {
          console.log("Find " + collection + " where " + query + " is = " +  match + " and order by " + orderkey)
          //firebase will ask to confirm the index in the console.
          const res = await projectFirestore.collection(collection)
          .where(query, '==', match)
          .orderBy('order')
            .get()
            .then((querySnapshot) => {
              content.value = querySnapshot.docs.map(doc => {
                 return { ...doc.data(), id: doc.id }
               })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }

      students.value = content.value

    return { students, error }
    }


    collector('students', 'fname', 'coursecode', props.coursecoderef)

    console.log(students.value)


    return { students, error }

  },
}
</script>

<style>


</style>
