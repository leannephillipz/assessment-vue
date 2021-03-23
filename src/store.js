import { reactive } from 'vue'
import courses from '@/data/courses.json'
import students from '@/data/students.json'

const store = reactive({
  selected:{
    items: [  ],
    add(item){
      if (!store.selected.items.length){
        store.selected.items.push(item)
      } else {
        store.selected.items = []
        store.selected.items.push(item)
      }

    }
  },
  courses,
  students: students.students,

})
export default {store}
