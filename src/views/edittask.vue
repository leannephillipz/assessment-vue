<template>
<div class="task edit">
  <h1>Edit Task</h1>


  <form @submit.prevent="handleSubmit">
    <label>Number: </label>
    <input type="text" v-model="task.order" class="short">
    <label>Title: </label>
    <input type="text" v-model="task.title">
    <label>Description:</label>
    <textarea v-model="task.desc" required></textarea>



  <div v-if="task.items != []" >
    <div v-for="item in task.items">
      <div class="item">
        <label>Number: </label>
        <input type="text" v-model="item.number" class="short">

        <label>Title: </label>
        <input type="text" v-model="item.title">

        <label>Text:</label>
        <textarea v-model="item.text" required></textarea>

      </div>
    </div>
  </div>

  <button>Update</button>
</form>



  </div>

</template>

<script>
import { computed } from 'vue'
import getCollection from '../composables/getCollection'
import getDocument from '@/composables/getDocument'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
  name: 'Task',
  props: ['slug'],
  setup(props) {
    // console.log(props.slug)
    const { content:task, error, load } = getDocument()
    load('tasks', props.slug)
    const router = useRouter()

    const handleSubmit = async () => {
      try {

        // const title = task.value.title
        const data = {
          // update: "next attempt",
          id: task.value.id,
          order: task.value.order,
          title: task.value.title,
          desc: task.value.desc,
          items: {...task.value.items}
        }
        // console.log(data)
        const res = await projectFirestore.collection('tasks').doc(task.value.id).update(data)
        // console.log(res) // can see the id and path of doc created
        router.push({ name: 'Home' })
      } catch(err) {
          console.log(err)
      }
    }

    return { error, task, handleSubmit }
  }
}
</script>
