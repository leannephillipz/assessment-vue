import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getStudent = (id) => {

  const student = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection("students").doc(id).get()
      student.value = { ...res.data(), id: res.id}

      if (!res.exists){
        throw Error('student does not exists')
      }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { student, error, load }
}

export default getStudent
