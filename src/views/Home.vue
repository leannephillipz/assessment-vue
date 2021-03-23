<template>
  <div class="home">

    <!-- <h3>Number of items in : {{$store.selected.items.length}} items(s)</h3> -->
    <ul>
    <li v-for="(item, i) in $store.selected.items" :key="i">
      <span>Selected: {{item.title}}</span>
    </li>
      <li v-for="(select, i) in $store.courses" :key="i">
        <span>{{select.title}}</span> <button @click="$store.selected.add(select)">Select</button>
      </li>
  </ul>

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
