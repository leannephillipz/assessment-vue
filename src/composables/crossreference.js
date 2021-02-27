import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getmatch = (collection, query, match) => {

  const content = ref([])
  const error = ref(null)
  let finder = ref()

  const collect = async (collection, query, match) => {
    console.log("look for a document with a " + match + ' which matches ' + query + " in " + collection)
    if (query) {
      finder = projectFirestore.collection(collection).where(match, '==', query)
    } else {
      finder = projectFirestore.collection(collection)
    }

    try {
      if (query) {
        const res = await finder.get()
        // console.log("try")
        // console.log(res.docs)
        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })
      } else {
        // console.log("no query")
        const res = finder.get()
        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })
      }
    }
    catch(err) {
      console.log("error")
      error.value = err.message
    }
  }

  collect(collection, query, match)

  return { content, error, collect }
}

export default getmatch
