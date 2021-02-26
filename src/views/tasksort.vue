<template >
  <p>Organise Tasks with Units</p>

  <div class="flex">
    <div class="unitlist">
      <h3>Units</h3>
      <ul class="sort">
      <li v-for="unit in units" class='items' :key="unit.id">
        <h4>Unit: {{ unit.unit }} </h4>
        <ul v-for="item in unit.items" :key="item" class="item">
          <li><span>{{ item.id }}</span><div></div></li>
        </ul>
      </li>
    </ul>
    </div>
    <div class="tasklist">
      <h3>Unassigned Tasks</h3>
      <div>Task 1</div>
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

<style  scoped>
</style>
