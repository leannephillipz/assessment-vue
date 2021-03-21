<template>
  <div class="tasks">
    <!-- <h1>{{course}} </h1> -->
    <h1>Assessment</h1>
    <div v-if="error">{{ error }}</div>
    <div v-for="unit in units" class='items' :key="unit.id">
      <h3>Unit: {{ unit.unit }} </h3>
      <p>{{ unit.title }}</p>
      <p>{{ unit.aim }}</p>

      <div v-for="item in unit.items" :key="item" class="item">
        <div class="">
          <p>{{ item.id }} : {{ item.criteria }}</p>
          <p class="small">{{ item.outcome }}</p>
        </div>
        <div class="icon">
          <img  src="../assets/icons/more_vert-24px.svg">
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Tasks',
  components: {  },
  // props: ['code', 'course'],
  setup() {
    const { content:units, error, collect } = getCollection()

    collect('units', 'unit')

    return { units, error }
  },
}
</script>

<style>


</style>
