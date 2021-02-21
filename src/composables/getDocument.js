import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = () => {

  const content = ref([])
  const error = ref(null)

  const load = async (collection, slug, query) => {
    // console.log(collection, slug)
    try {

      if (query) {
        let res = await projectFirestore.collection(collection).where(query, '==', slug).get()
        // console.log(res.docs[0].data()) // get's only one doc
        content.value = {...res.docs[0].data(), id: res.id }
      }  else {
        let res = await projectFirestore.collection(collection).doc(slug).get()
        content.value = { ...res.data(), id: res.id }
      }

    }
    catch(err) {
      error.value = err.message
    }
    finally {
    // console.log(content.value)
  }
  }

  return { content, error, load }
}

export default getDocument
