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










// import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'
//
// const getmatch = (collection, query, match) => {
//
//   const content = ref(null)
//   const error = ref(null)
//
//   let collectionRef = projectFirestore.collection(collection)
//
//   if (query) { // will need to 'create an index on firebase site'
//     collectionRef = projectFirestore.collection(collection).where(match, '==', query)
//     console.log("look for a student with a " + match + ' which matches ' + query + " in " + collection)
//     const data = collectionRef.docs.map(doc => {
//       return { ...doc.data(), id: doc.id }
//     })
//
//     console.log(data)
//   }
//
//   const unsub = collectionRef.onSnapshot(snap => {
//     let results = []
//     snap.docs.forEach(doc => {
//       results.push({...doc.data(), id: doc.id})
//     });
//
//     // update values
//     content.value = results
//     // console.log(documents.value)
//     error.value = null
//   }, err => {
//     console.log(err.message)
//     content.value = null
//     error.value = 'could not fetch the data'
//   })
//
//
//
//   return { error, content }
// }
//
// export default getmatch
//
//
//
//





//
// import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'
//
// const getmatch = (collection, query, match) => {
//
//   const content = ref(null)
//   const error = ref(null)
//
//   if (query) { // will need to 'create an index on firebase site'
//     console.log("look for a student with a " + match + ' which matches ' + query + " in " + collection)
//
//       let res = projectFirestore.collection(collection).where(match, '==', query).get()
//
//     const data = res.docs.map(doc => {
//       return { ...doc.data(), id: doc.id }
//     })
//
//     console.log(data)
//   }
//
//
//
//
//
//   return { error, content }
// }
//
// export default getmatch





//
// import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'
//
// const getmatch = (collection, query, match) => {
//
//   const content = ref(null)
//   const error = ref(null)
//
//   let collectionRef = projectFirestore.collection(collection)
//
//   if (query) { // will need to 'create an index on firebase site'
//     res = projectFirestore.collection(collection).where(match, '==', query)
//     console.log("look for a student with a " + match + ' which matches ' + query + " in " + collection)
//     const data = res.docs.map(doc => {
//       return { ...doc.data(), id: doc.id }
//     })
//
//     console.log(data)
//   }
//
//   const unsub = collectionRef.onSnapshot(snap => {
//     let results = []
//     snap.docs.forEach(doc => {
//       results.push({...doc.data(), id: doc.id})
//     });
//
//     // update values
//     content.value = results
//     // console.log(documents.value)
//     error.value = null
//   }, err => {
//     console.log(err.message)
//     content.value = null
//     error.value = 'could not fetch the data'
//   })
//
//
//
//   return { error, content }
// }
//
// export default getmatch
//


//
//
// import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'
//
//
//
//   const getmatch = async (collection, query, match) => {
//     const content = ref([])
//     const error = ref(null)
//     try {
//
//       if (query) {  // will need to 'create an index on firebase site'
//          // const res = await projectFirestore.collection(collection).where(match, '==', query).get()
//          // console.log(res)
//          // content.value = res.docs.map(doc => {
//          //    return { ...doc.data(), id: doc.id }
//          //  })
//
//          projectFirestore.collection(collection).where(match, '==', query)
//              .get()
//              .then((querySnapshot) => {
//                  querySnapshot.forEach((doc) => {
//                    let results = res.docs.map(doc => {
//                       return { ...doc.data(), id: doc.id }
//                     })
//                     content.value = results
//                      console.log(content.value);
//                  });
//              })
//              .catch((error) => {
//                  console.log("Error getting documents: ", error);
//              });
//
//
//
//
//         } else {
//           throw new Error('Whoops!')
//         }
//
//
//     }
//     catch(err) {
//       error.value = err.message
//     }
// return { content, error }
//   }
//
//
//
//
// export default getmatch
