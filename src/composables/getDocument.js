import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = () => {

  const content = ref([])
  const error = ref(null)

  const load = async (collection, slug) => {
    // console.log(collection, slug)
    try {
      let res = await projectFirestore.collection(collection).doc(slug).get()
      content.value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
    finally {
    console.log("finally")
  }
  }

  return { content, error, load }
}

export default getDocument
