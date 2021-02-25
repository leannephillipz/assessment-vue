<template>
  <div class="tasks">
    <h1>{{course}} Assessment</h1>
    <div v-if="error">{{ error }}</div>
    <div v-for="item in content" class='items' :key="item.id">
      <h3>Unit {{ item.unit }} : {{ item.item }}</h3>
      <p>{{ item.criteria }}</p>
      <p>{{ item.outcome }}</p>
      <p>{{item.feedback}}</p>
      <!-- <div v-for="criterion in item.feedback " :key="criterion.outcome" class="item">
        <div class="">
          <p>{{ criterion.criteria }}</p>
          <p class="small">{{ criterion.outcome }}</p>
        </div>
        <div class="icon">
          <img  src="../assets/icons/more_vert-24px.svg">
        </div>
      </div> -->
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Tasks',
  components: {  },
  props: ['code', 'course'],
  setup() {
    const { content, error, collect } = getCollection()

    collect('assessment')

    return { content, error }
  },
}
</script>

<style>


</style>
