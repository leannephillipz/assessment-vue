import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCourses = () => {

  const courses = ref([])
  const error = ref(null)

  const load = async () => {
    try {

      const res = await projectFirestore.collection("courses").get()
      // console.log(res)
      courses.value = res.docs.map(doc => {
        console.log(res.docs)
        return { ...doc.data(), id: doc.id }
      })

    }
    catch(err) {
      error.value = err.message
      console.log(error)
    }
  }
  return { courses, error, load }
}

export default getCourses
