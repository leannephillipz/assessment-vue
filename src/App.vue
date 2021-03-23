<template>
  <navi/>
  <router-view/>
</template>

<script>
import navi from '@/components/navi.vue'

  export default {
    name: 'App',
    components: {
      navi
    },
  }

</script>
