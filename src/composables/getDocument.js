import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDoc = (id) => {

  const details = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection("courses").doc(id).get()
      // web api does not support subcollections
      // console.log(resprojects.value)
      details.value = { ...res.data(), id: res.id}
      console.log(details.value)
      if (!res.exists){
        throw Error('data does not exists')
      }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { details, error, load }
}

export default getDoc
