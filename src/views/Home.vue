<template>
<h1>Not set yet</h1>
<p> &#60; &#60; check out the nav for the dev shortcuts </p>
<p class="note">this page will be set up last (probably)</p>
<courses/>

<router-link :to="{ name: 'Marker' }" class="btn">Marker</router-link>

</template>

<script>
import courses from '@/components/courses'

export default {
  name: 'Home',
  components: { courses },
  setup() {
  }
}
</script>

<style>


</style>
