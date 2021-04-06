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

    // store.selected.scourse.push(item) //push adds, splice replaces.
    store.selected.scourse.splice(0, 1, item)
    var filterArray = store.students.filter(function(student) {
    	return student.coursecode == store.selected.scourse[0].code
    })
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
    console.log(store.selected.scourse[0].code);
    router.push({ name: 'Course'})
  },
  user: {
    uname: [],
  },
  courses,
  students: students.students,

})
export default {store}
