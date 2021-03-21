<template>
  <h1>Courses</h1>
  <div v-if="error">{{ error }}</div>
  <div class="courses flex">

      <div v-for="course in courses" class='item' :key="course.id">
        <router-link :to="{ name: 'AssessStep1', params: { code: course.code  }}">
          <h3>{{ course.title }} <span>Level {{ course.lvl }}</span> </h3>
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
    margin-right: 1em;
    text-transform: capitalize;
    flex: 1 1 50%;
    border: solid 1px #676767;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
  }

  .item:hover {
      background-color: cadetblue;
      border: transparent;

    }

  h3 {
    color:coral;
    font-size: 1.3rem;
    border-bottom: 1px solid coral;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }

.item:hover h3 {
color:#25292f;
border-color: #25292f;
  }

h3 span {
  color:#879096;
}
.item:hover h3 span {
  color: #5f6c75;
}

  p {
    margin: 0;
  }

.item a {color:#fff;}
.item a:hover {
  text-decoration: none;
}


</style>
