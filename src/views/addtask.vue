<template>
  <div class="create">
    <h3>Create new Task</h3>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Description:</label>
      <textarea v-model="desc" required></textarea>


        <div v-if="items != []" >
          <div v-for="item in items">
            <div class="details">
              <p>{{item.title}}</p>
              <p>{{item.text}}</p>
            </div>
          </div>

        </div>


      <div class="details">
        <p>Tasks</p>
        <label>Item</label>
        <input v-model="item.title" type="text" placeholder="title">
        <input v-model="item.text" type="text" placeholder="text">
        <input v-model="item.refer" type="text" placeholder="Referral Text">
        <input v-model="item.pass" type="text" placeholder="Pass Text">
        <input v-model="item.pass" type="good" placeholder="Good text">
        <input v-model="item.pass" type="excellent" placeholder="Excellent text">
        <!-- <input v-model="item.text" type="text" @keydown.enter.prevent="handleKeydown"> -->
        <span @click="handleClick" class="btn">Add this item</span>
      </div>



      <button>Add Task</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
// import { randomid } from '@/composables/randomid'

export default {
  setup() {
    const title = ref('')
    const desc = ref('')
    const router = useRouter()
    const item = ref({})
    const items = ref([])
    // const uuid = randomid()

    const handleSubmit = async () => {
      try {
        // const ran = await randomid()

        const task = {
          title: title.value,
          desc: desc.value,
          id: Math.floor(Math.random() * 1000000), //not suitable long term
          items: {...items.value}
        }

        const res = await projectFirestore.collection('tasks').add(task)
        console.log(res) // can see the id and path of doc created
        router.push({ name: 'Home' })
      } catch(err) {
          console.log(err)
      }
    }

    const handleClick = () => {
      if (!items.value.includes(item.value)) {
        // item.value = item.value.replace(/\s/g,'') // remove all whitespace
        items.value.push(item.value)
        console.log(items.value)
      }
      item.value = {}
    }

    return { desc, title, item, items, handleSubmit, handleClick }
  },
}
</script>

<style>

</style>
