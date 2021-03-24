import { reactive } from 'vue'
import courses from '@/data/courses.json'
import students from '@/data/students.json'
import router from './router'


const store = reactive({
  selected:{
    scourse: [],
    sstudents: [],
  },
  addcourse(item){

    router.push({ name: 'About'})
    store.selected.scourse.push(item)
    // let tempdump = store.students.filter(student => student.coursecode.includes("EM0090"))
    console.log(store.selected.scourse[0].code);

    var filterArray = store.students.filter(function(student) {
    	return student.coursecode == store.selected.scourse[0].code
    })

    // console.log(store.selected.sstudents.coursecode)
    store.selected.sstudents = filterArray

    // if (!store.selected.scourses.length){ // only need this IF we need ability to select multiple courses, so I'll strip this out.
    //   router.push({ name: 'About'})
    //   store.selected.scourses.push(item)
    // } else {
    //   router.push({ name: 'About'})
    //   store.selected.scourses = []
    //   store.selected.scourses.push(item)
    //
    //   // console.log(this)
    //   //get students
    // }

  },
  user: {
    uname: [],
  },
  courses,
  students: students.students,

})
export default {store}
