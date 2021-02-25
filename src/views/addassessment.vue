<template>
  <div class="create">
    <h1>Create Assessment</h1>

    <form @submit.prevent="handleSubmit">

      <label>Unit</label>
      <input v-model="unit" type="text" name="unit" class="short">

      <label>title</label>
      <input v-model="title" type="text" name="title">

      <label>Aim</label>
      <textarea v-model="aim" required></textarea>


      <div v-if="items != []" >
        <div v-for="item in items">
          <div class="details">
            <p>{{item.id}}</p>
            <p>{{item.criteria}}</p>
            <p>{{item.outcome}}</p>
          </div>
        </div>

      </div>

      <div class="details">
        <p>Tasks</p>
        <label>Item</label>
        <input v-model="item.id" type="text" placeholder="ID" class="short">
        <input v-model="item.criteria" type="text" placeholder="Criteria">
        <input v-model="item.outcome" type="text" placeholder="Outcome">
        <input v-model="item.refer" type="text" placeholder="Referral Feedback">
        <input v-model="item.pass" type="text" placeholder="Pass Feedback">
        <input v-model="item.good" type="text" placeholder="Good Feedback">
        <input v-model="item.excellent" type="text" placeholder="Excellent Feedback">
        <span @click="handleClick" class="btn">Add this item</span>
      </div>


      <button>Add Assessment</button>
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
    const router = useRouter()
    const unit = ref('')
    const title = ref('')
    const aim = ref('')
    const item = ref({})
    const items = ref([])

    const handleClick = () => {
      items.value.push(item.value)
      item.value = {}
    }


    const handleSubmit = async () => {
      try {
        const data = {
          unit: unit.value,
          title: title.value,
          aim: aim.value,
          items: {...items.value}
        }
        const res = await projectFirestore.collection('units').add(data)
        console.log(res)
      } catch(err) {
          console.log(err)
      }
    }



    return {unit, title, aim, item, items, handleClick, handleSubmit }
  },
}
</script>

<style>

</style>
