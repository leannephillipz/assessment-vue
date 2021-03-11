<template>
<h1>Not set yet</h1>
<p> &#60; &#60; check out the nav for the dev shortcuts </p>
<p class="note">this page will be set up last (probably)</p>

<div>Test: {{ filters.uppercase(name) }}</div>
<!-- <p>{{ $filtering.currencyUSD(price) }}</p> -->


<router-link :to="{ name: 'Marker' }" class="btn">Start Marking</router-link>

</template>

<script>
import { ref } from "vue";
import filters from "@/filters"

export default {

  name: 'Home',
  setup() {
    let name = ref("Leanne");
    let price = ref(123);
    return {
     name,
     filters,
     price
   }
 }
}
</script>

<style>


</style>
