<template>
  <div class="projects details">
    <h1>Projects</h1>


    <div v-if="error">{{ error }}</div>

      <div v-for="project in projects" class='items' :key="project.uid">
        <div class="project">
          <h2>Project {{ project.uid }} : <br>{{ project.title }} </h2>
          <h4>{{ project.desc }}</h4>
        </div>

        <div v-for="task in tasks" class='items' :key="task.id">
           <div class="task" v-if="task.project == project.uid">
             <h3>Task {{ task.order }} : {{ task.title }} <router-link :to="{ name: 'EditTask', params: { slug: task.id  } }" class="edit icon"><img  src="../assets/icons/more_vert-24px.svg"></router-link> </h3>
             <h4>{{ task.desc }}</h4>
           </div>

           <div v-for="items in task.items" :key="items.title" class="item" v-if="task.project == project.uid">
             <div class="">
               <p>{{ task.order }}.{{ items.number }} {{ items.title }}</p>
               <p class="small">{{ items.text }}</p>
             </div>
             <div class="icon">.</div>
           </div>
         </div>

      </div>


   <!-- <div v-for="task in tasks" class='items' :key="task.id">
      <div class="task">
        <h3>Task {{ task.order }} : {{ task.title }} <router-link :to="{ name: 'EditTask', params: { slug: task.id  } }" class="edit icon"><img  src="../assets/icons/more_vert-24px.svg"></router-link> </h3>
        <h4>{{ task.desc }}</h4>
      </div>




      <div v-for="items in task.items" :key="items.title" class="item">
        <div class="">
          <p>{{ task.order }}.{{ items.number }} {{ items.title }}</p>
          <p class="small">{{ items.text }}</p>
        </div>
        <div class="icon">
          .
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import { ref } from 'vue'
import collector from '../composables/collector'

export default {
  name: 'Tasks',
  components: {  },
  setup() {

    const coursecode = ref('FEL3Y1GD2020') // need's to be dynamic.
    const projects = ref()
    const tasks = ref()
    const error = ref()

    const getprojects =  () => {
      return collector('projects', 'uid', 'coursecode', coursecode.value);
    }
    const gettasks =  () => {
      return collector('tasks', 'order', 'coursecode', coursecode.value);
    }



    getprojects().then(
      // resolve the promise
      function(result){


        // can't find a way to filter accending order.

        // const json = JSON.stringify(result.content.value)
        //
        // var process = json.slice(0);
        //     process.sort(function(a,b) {
        //         return a.born - b.born;
        //     });
        //
        //   console.log(process)

      //   process.sort(function(a, b) {
      //   return a.order - b.order;
      // });
      // console.log(process)

        return projects.value = result.content.value
        }
      ).then(
        gettasks().then(
          function(result){
            // console.log(result.content.value)
            return tasks.value = result.content.value
          }
        )
      )


// console.log(projects.value)

    // async function getProcessedData() {
    //   try {
    //     let { content, error, collect } = await getCollection();
    //     collect('projects', 'order')
    //   } catch(e) {
    //     let error = e
    //   }
    //   return { content, error }
    // }
    // getProcessedData()


    // async function myFunction() {
    //      const  { content:projects, error, collect } = await getCollection();
    //   }.then(
    //     function(value) {},
    //     function(error) {}
    //   );


      // async function foo() {
      //    const result1 = await new Promise(
      //      const { content:projects, error, collect } =  getCollection();
      //          collect('projects', 'uid')
      //    )
      //    const result2 = await new Promise(
      //      const  { content:tasks, error, collect } =  getCollection();
      //    )
      // }
      // foo()





    return { projects, tasks, error }
  },
}
</script>

<style>



</style>
