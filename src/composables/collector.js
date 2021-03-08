import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const collector = async (collection, orderkey, match) => {

  const content = ref([])
  const error = ref(null)

    try {

      if (orderkey) {
        const res = await projectFirestore.collection(collection)
        .orderBy(orderkey)
        .get()

        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })

      } else if (match) {
        const res = await projectFirestore.collection(collection)
        .orderBy(orderkey)
        .get()


        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })

      } else {
        const res = await projectFirestore.collection(collection).get()
        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })
      }

    }
    catch(err) {
      error.value = err.message
    }


  return { content, error }
}

export default collector
