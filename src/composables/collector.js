import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


// const collector = async (collection, orberby, field, that matches) => {
const collector = async (collection, orderkey, query, match) => {

  const content = ref([])
  const error = ref(null)


    try {
      if (query) {
        console.log("Find " + collection + " where " + query + " is = " +  match + " and order by " + orderkey)
        //firebase will ask to confirm the index in the console.
        const res = await projectFirestore.collection(collection)
        .where(query, '==', match)
        .orderBy('order')
          .get()
          .then((querySnapshot) => {
            content.value = querySnapshot.docs.map(doc => {
               return { ...doc.data(), id: doc.id }
             })
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });
      } else if (orderkey) {
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

    }
    catch(err) {
      error.value = err.message
      console.log(error.value)
    }

console.log(content.value)

  return { content, error }
}

export default collector
