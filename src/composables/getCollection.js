import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = () => {

  const content = ref([])
  const error = ref(null)

  const collect = async (collection, orderkey) => {

    try {

      if (orderkey) {
        const res = await projectFirestore.collection(collection)
        .orderBy('order')
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

      // const res = await projectFirestore.collection(collection).get()
      // console.log(res.docs)

      // content.value = res.docs.map(doc => {
        // console.log(doc.data())
         // return { ...doc.data(), id: doc.id }
      // })

      // return content.value
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { content, error, collect }
}

export default getCollection
