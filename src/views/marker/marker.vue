<template>
  <div class="marker">
<div v-if="error">{{error}}</div>
<div v-if="showdata == 1">
  <h2>Select:</h2>
  <div v-for="course in courses" class='item' :key="course.id">
      <p class="btn" @click="getStudents(2, {coursetitle: course.title, coursecode: course.code})">{{ course.title }}</p>
  </div>
</div>

<div v-if="showdata == 2">
  <h2>{{process.coursetitle}}</h2>
  <div v-for="task in tasks" class='item' :key="task.id">
      <p class="btn" @click="next(3, {task: task.order, tasktitle: task.title, taskdesc: task.desc})">Task: {{ task.order }} {{ task.title }}</p>
  </div>
</div>

<div id="3" v-if="showdata == 3">
<h2>{{process.coursetitle}} <br> Task: {{process.task}}</h2>
  <div v-for="student in filteredstudents" class='item' :key="student.sid">
      <p class="btn" @click="next(4, {student: student.fname + ' ' + student.lname, sid: student.sid})">{{ student.fname }} {{ student.lname }}</p>
  </div>
</div>

<div v-if="showdata == 4">
  <h2>{{process.coursetitle}} <br> Task: {{process.task}} <br>{{process.tasktitle}} <br> {{process.student}}</h2>
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
        <p class="btn" @click="next(5)">next</p>

</div>



<div v-if="showdata == 5">
  <h4>Comments</h4>
  <textarea name="comments" rows="8" cols="80" placeholder="Feedback text Updates dependent on selection" v-model="comments"></textarea>
  <h4>Action Plan</h4>
  <textarea name="actionplan" rows="8" cols="80" placeholder="Feedback text Updates dependent on selection" v-model="action"></textarea>
  <p><a href="javascript:history.back()" class="btn">Save &amp; Reset or go to student?</a></p>
</div>


</div>
</template>

<script>

import { projectFirestore } from '@/firebase/config'

export default {
  data(){
    return {
      course:  [],
      courses: [],
      task: [],
      tasks: [],
      error: '',
      showdata: 1,
      students: [],
      student: [],
      process: [],
      checks: [],
      checked: [],
      action: [],
      comments: [],
      grade: ''
    }
  },
  mounted() {
    const collectdata = () => {

      projectFirestore.collection("courses").get()
      	.then((querySnapshot) => {
      		querySnapshot.forEach((doc) => {
      			this.courses.push({...doc.data(), id: doc.id
      			})
      		});
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
        // console.log(this.students)
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });




    }
    collectdata()


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
          // console.log(this.process)
        }
  },
  computed: {
    filteredstudents(){
      return this.students.filter(student => {
       return student.coursecode.includes(this.process.coursecode)})
    }
  }

}
</script>
