<template>
  <div class="home">

    <!-- <h3>Number of items in : {{$store.selected.items.length}} items(s)</h3> -->
    <ul>
    <li v-for="(item, i) in $store.selected.scourse" :key="i">
      <span>Selected: {{item.title}}</span>
    </li>
      <li v-for="(select, i) in $store.courses" :key="i">
        <button @click="$store.addcourse(select)">{{select.title}}</button>
      </li>
  </ul>

<!-- <button type="button" name="button" @click="$router.push({ name: 'About'})" :disabled="!$store.selected.scourses[0]">Next</button> -->
<!-- disabled until a selection is made -->

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data(){
    return{

    }
  }
}
</script>
