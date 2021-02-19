import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCourse = (id) => {

  const course = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection("courses").doc(id).get()
      //can't get subcollection - need - .collectionGroup?
      // const resprojects = await projectFirestore.collection("courses").doc(id).collection('projects').get()
      // console.log(resprojects.value)
      course.value = { ...res.data(), id: res.id}
      // course.value = { ...res.data(), id: res.id, projects: resprojects}
      console.log(course.value)
      if (!res.exists){
        throw Error('course does not exists')
      }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { course, error, load }
}

export default getCourse
