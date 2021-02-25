<template>
  <div v-if="error">{{ error }}</div>
  <p>Select a course:</p>
  <div class="courses flex">
      <div v-for="course in courses" class='item' :key="course.id">
        <router-link :to="{ name: 'Course', params: { code: course.code  }}">
          <h3>{{ course.title }} Level {{ course.lvl }}</h3>
          <p>year {{ course.year }}</p>
        </router-link>

      </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import getCollection from '@/composables/getCollection'

export default {
  name: 'Courses',
  components: {  },
  setup() {
    const { content:courses, error, collect } = getCollection()

     collect('courses')

    return { courses, error }
  },
}
</script>

<style scoped>


.item {
  display: inline-block;
    background: #566e7a;
    border-radius: 0.3em;
    padding: 1em;
    margin-right: 1em;
    text-transform: capitalize;
    flex: 1 1 50%;
  }
  h3 {
    font-size: 1.3rem;
    border-bottom: 1px solid #252a2f;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
.item:hover {
    background: #718a96;
  }

  p {
    margin: 0;
  }

.item a {color:#fff;}
.item a:hover {
  text-decoration: none;
}


</style>
