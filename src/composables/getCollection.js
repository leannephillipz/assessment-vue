import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = () => {

  const content = ref([])
  const error = ref(null)

  const collect = async (collection, orderkey) => {

    try {

      if (orderkey) {
        console.log("Find " + collection + " and order by " + orderkey)
        const res = await projectFirestore.collection(collection)
        .orderBy(orderkey)
        .get()
        content.value = res.docs.map(doc => {
           return { ...doc.data(), id: doc.id }
         })

      } else {
        console.log("Find " + collection + " no order or query")
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
