import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = () => {

  const details = ref([])
  const error = ref(null)

  const load = async (collection) => {
    try {
      const res = await projectFirestore.collection(collection)
      // .orderBy('created', 'desc')
      .get()
      // console.log(res.docs)

      details.value = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { details, error, load }
}

export default getCollection
