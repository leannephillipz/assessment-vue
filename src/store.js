import { reactive } from 'vue'
import courses from '@/data/courses.json'
import students from '@/data/students.json'

const store = reactive({
  selected:{
    sitems: [],
    scourses: [],
  },
  addcourse(item){
    if (!store.selected.scourses.length){
      store.selected.scourses.push(item)
    } else {
      store.selected.scourses = []
      store.selected.scourses.push(item)
      //get students
    }

  },
  user: {
    uname: [],
  },
  courses,
  students: students.students,

})
export default {store}
