<template>
  <div class="details">
  <p>Students Will go here</p>

<div v-for="student in students" :key="student.name">
  <p class="name">
  {{student.name}}
</p>

</div>

  <div>

  </div>
  </div>
</template>

<script>
export default {
   props: ['students'],
   setup(props) {

   }
}
</script>

<style scoped>
</style>
