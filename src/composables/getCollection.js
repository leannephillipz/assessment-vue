import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = () => {

  const content = ref([])
  const error = ref(null)

  const load = async (collection) => {
    try {
      const res = await projectFirestore.collection(collection).get()
      // console.log(res.docs)

      content.value = res.docs.map(doc => {
        console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { content, error, load }
}

export default getCollection
