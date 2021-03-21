<template>
  <div class="marker">
<div v-if="error">{{error}}</div>
<!-- <div v-for="data in myJson">{{data.fname}}</div> -->
<h2 v-if="process.coursetitle">Course: {{process.coursetitle}}</h2>
<p v-if="process.projectuid">Project: {{process.projectuid}} {{process.projecttitle}}</p>
<p v-if="process.tasktitle">Task: {{process.task}} {{process.tasktitle}}</p>
<p v-if="process.student">Student: {{process.student}}</p>

<section v-if="showdata == 1">
  <h2>Select:</h2>
  <div v-for="course in courses" class='item' :key="course.id">
      <p class="btn" @click="getStudents(2, {coursetitle: course.title, coursecode: course.code})">{{ course.title }}</p>
  </div>
</section>

<section v-if="showdata == 2">
  <div v-for="project in projects" class='item' :key="project.id">
      <p class="btn" @click="next(3, {projectuid: project.uid, projecttitle: project.title, projectdesc: project.desc})">Project: {{ project.uid }} {{ project.title }}</p>
  </div>
</section>

<section v-if="showdata == 3">
  <div v-for="task in tasks" class='item' :key="task.id" >
    <!-- <div v-for="task in tasks" class='item' :key="task.id" > -->
      <p v-if="task.project == process.projectuid" class="btn" @click="next(4, {task: task.order, tasktitle: task.title, taskdesc: task.desc})">Task: {{ task.order }} {{ task.title }}</p>
  </div>
</section>

<section id="3" v-if="showdata == 4">

<ul class="students grid">
  <ul class="flex header">
    <li>attn.</li>
    <li>Name</li>
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
    <li>Task 4</li>
  </ul>

  <li v-for="student in filteredstudents" class='item' :key="student.sid">

    <ul class="flex">
      <li >
        <span v-if="student.flags" v-for="flag in student.flags" :key="flag">*</span></li>
      <li>
      <p class="btn" @click="next(5, {student: student.fname + ' ' + student.lname, sid: student.sid})">{{ student.fname }} {{ student.lname }}</p>
    </li>
<!-- <li>{{student.tasks}}</li> -->

<template v-for="(data, name, index) in student.tasks" :key="name">
<li v-if="name == '1' || '2' || '3' || '4' ">
  <!-- <p>Task {{name}}:</p> -->
  <p>{{data.grade}}</p>
  <p>{{data.feedback}}</p>
</li>
 </template>
    <!-- <template v-for="(data, name, index) in student.tasks" :key="name"> -->
      <!-- <li v-if="name == 'task2'">{{data}}</li> -->
      <!-- <li > {{name}} {{data}}</li> -->
      <!-- <li>{{data}}</li> -->
      <!-- <li>{{name[0]}}</li>-->
     <!-- <li>{{name[0]}} gets the first letter</li> -->
     <!-- <li>{{name}}{{data}}</li> -->
      <!-- <li v-if="name == 'task1'">{{data}}</li>
       <li v-if="name == 'task2'">{{data}}</li>
       <li v-if="name == 'task4'">{{data}}</li>
       <li v-if="name == 'task4'">{{data}}</li> -->
     <!-- </template> -->

    </ul>
  </li>
</ul>
</section>

<div v-if="showdata == 5">
  <p>{{process.taskdesc}}</p>
<p class="note">Missing the items</p>

  <div class="grades">
    <label class="pill" :class="(grade == 'refer') ? 'refer' : 'false'"><input type="radio" name="grade" value="refer" v-model="grade">
    Referal</label>
    <label class="pill" :class="(grade == 'pass') ? 'pass' : 'false'"><input type="radio" name="grade" value="pass" v-model="grade">
    Pass</label>
    <label class="pill" :class="(grade == 'good') ? 'good' : 'false'"><input type="radio" name="grade" value="good" v-model="grade">
    Good</label>
    <label class="pill" :class="(grade == 'excellent') ? 'excellent' : 'false'" ><input type="radio" name="grade" value="excellent" v-model="grade">
    Excellent</label>
  </div>
  <div class="checks">
          <p>Select any which apply.</p>
          <p class="note">This bit has broken</p>

          <label>
  <input type="checkbox" value="Daniel" v-model="checked"/>
  Daniel
</label>
<label>
  <input type="checkbox" value="Nathaniel" v-model="checked"/>
  Nathaniel
</label>
<label>
  <input type="checkbox" value="Hubert" v-model="checked"/>
  Hubert
</label>

          <div >
              <label v-for="(check, index) in checks" :key="index">
                <input type="checkbox" v-model="checked[index]" value="yes" >
                {{check.txt}}
                <p class="tooltip">
                  <i>{{check.tip}}</i>
                </p>
              </label>
          </div>
        </div>
{{checked}}
        <div class="feedback">
                <p>feedback</p>
                <div v-for="item in checked">
                    {{item}}
                </div>
              </div>
        <p class="btn" @click="next(6)">next</p>

</div>



<div v-if="showdata == 6">
  <h4>Comments</h4>
  <textarea name="comments" rows="8" cols="80" placeholder="Feedback text Updates dependent on selection" v-model="comments"></textarea>
  <h4>Action Plan</h4>
  <textarea name="actionplan" rows="8" cols="80" placeholder="Feedback text Updates dependent on selection" v-model="action"></textarea>
  <p><a href="javascript:history.back()" class="btn">Save &amp; Reset or go to student?</a></p>
</div>


</div>
</template>

<script>

import myJson from '@/data/students.json'
import { projectFirestore } from '@/firebase/config'

export default {
  data(){
    return {
      myJson,
      course:  [],
      courses: [],
      task: [],
      tasks: [],
      projects:[],
      error: '',
      showdata: 1,
      students: [],
      sortstudents:[],
      student: [],
      process: [],
      checks: [],
      checked: [],
      action: [],
      comments: [],
      grade: ''
    }
  },
  created() {
    const collectdata = () => {

      projectFirestore.collection("courses").get()
      	.then((querySnapshot) => {
          var newdata = []
      		querySnapshot.forEach((doc) => {
      			newdata.push(
              {...doc.data(), id: doc.id})
      		});
          this.courses = newdata
          console.log(this.courses)
          // console.log('get data:' + JSON.stringify(newdata));
      	})
        .then(() => {
        })
      	.catch((error) => {
      		console.log("Error getting documents: ", error);
      	});


  projectFirestore.collection("tasks").orderBy('order').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.tasks.push({...doc.data(), id: doc.id
        })
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

    projectFirestore.collection("projects").orderBy('order').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.projects.push({...doc.data(), id: doc.id
          })
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    projectFirestore.collection("checks").orderBy('order').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.checks.push({...doc.data(), id: doc.id
          })
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


    projectFirestore.collection("students").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.students.push({ ...doc.data(), id: doc.id })
        // console.log(doc.id, " => ", doc.data());
        console.log(this.students)
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

}
    collectdata()
// console.log("created")
  },
  mounted(){
    // console.log("mounted")
    // let newdata = () => {
    //    const sorting = this.students.filter(data => {
    //      data.coursecode.includes(this.process.coursecode)
    //     this.sortstudents.push(data)
    //    })
    //     // const objectArray = Object.entries(sorting);
    //
    //     console.log(this.sortstudents)
    // }
    // newdata()
  },
  methods: {
    getStudents(next, data) {
      // console.log(data.code)
      this.process = data
      this.showdata = 2
      // console.log(this.process)
      },
      // next(next) {
      //     this.showdata = next
      //   }
      next(next, data) {
          this.showdata = next
          this.process = {...this.process, ...data}
          console.log(this.process)
        },

        // itemsContains(n) {
        //   return this.students.tasks.indexOf(n) > -1
        // }
  },
  computed: {

    filteredstudents(){
      return this.students.filter(student => {
       return student.coursecode.includes(this.process.coursecode)})

    }

  }


}
</script>
