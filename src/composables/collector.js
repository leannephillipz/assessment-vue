import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const collector = async (collection, orderkey, query, match) => {

  const content = ref([])
  const error = ref(null)

    try {

      if (query) {
        // if (orderkey) {
        //   console.log(orderkey)
        // }
        // let res = await projectFirestore.collection(collection).where(query, '==', match).orderBy("order").get()
        // const res = await projectFirestore.collection(collection).where(query, '==', match).get()
        // content.value = res.docs.map(doc => {
        //    return { ...doc.data(), id: doc.id }
        //  })
//firebase will ask to confirm the index in the console.
        const res = await projectFirestore.collection(collection)
        .where(query, '==', match)
        .orderBy('order')
          .get()
          .then((querySnapshot) => {

            content.value = querySnapshot.docs.map(doc => {
               return { ...doc.data(), id: doc.id }
             })

              // querySnapshot.forEach((doc) => {
              //     // doc.data() is never undefined for query doc snapshots
              //
              //     // content.value = doc.map(doc => {
              //     //    return { ...doc.data(), id: doc.id }
              //     //  })
              //
              //     content.value = doc.map(doc => {
              //        return { ...doc.data(), id: doc.id }
              //      })
              //
              //
              //     // content.value = { ...doc.data(), id: doc.id }
              //     console.log(content.value)
              //     return content.value
              //     // return { doc.id, ...doc.data }
              //     // console.log(doc.id, " => ", doc.data());
              //
              // });
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });

      } else if (orderkey) {
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
