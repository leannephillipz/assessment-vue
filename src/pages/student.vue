<template>
<main>
  
<p>Student</p>
<p>Id : {{slug}}</p>
<div v-if="student">Got it </div>
<div v-else>
  Trying to get data.
</div>
</main>
</template>



<script>
import studata from '@/data/students.json'
export default {
  name: 'home',
  props: ['slug'],
//   data() {
//     return {
//         slug: this.$route.params.slug
//     }
//   }
  data(){
    return {
      student: null,
      id: this.$route.params.slug
    }
  }, 
  mounted(){
     studata.filter(function(item){
      item.sid = this.id
      this.student = item.sid
      console.log(item.sid);
    })

  }

}


</script>
