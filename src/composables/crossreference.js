// import { ref } from 'vue'
// import { projectFirestore } from '../firebase/config'
//
// const getmatch = (collection, query, match) => {
//
//   const content = ref([])
//   const error = ref(null)
//
//   // const load = async (collection, query, match) => {
//   //   try {
//   //     const res = await projectFirestore
//   //     .collection(collection)
//   //     // .where('match', '==', query)
//   //     .get()
//   //     // console.log(res.docs)
//   //
//   //     // let set = new Set([]);
//   //
//   //
//   //     // const getdata = (querySnapshot) => {
//   //     //     querySnapshot.forEach((res) => {
//   //     //       set.add(...res.data())
//   //     //         // console.log(doc.id, ' => ', doc.data());
//   //     //     })
//   //       //   content.value = getdata
//   //       //   console.log(content.value)
//   //       // }
//   //
//   //     content.value = res.docs.map(doc => {
//   //       console.log(doc.data())
//   //       return { ...doc.data(), id: doc.id }
//   //     })
//   //   }
//   //   catch(err) {
//   //     error.value = err.message
//   //   }
//   // }
//
//   let collectionRef = projectFirestore.collection(collection)
//
//
//   const load =  (collection, query, match) => {
//     try {
//       const res = collectionRef
//       // .where('match', '==', query)
//       .get()
//
//       const unsub = collectionRef.onSnapshot(snap => {
//         let results = []
//         snap.docs.forEach(doc => {
//           // must wait for the server to create the timestamp & send it back
//           doc.data().createdAt && results.push({...doc.data(), id: doc.id})
//         });
//
//
//     }
//   }
//
//
//   return { content, error, load }
// }
//
// export default getmatch









import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getmatch = (collection, query, match) => {

  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)

  if (query) { // will need to 'create an index on firebase site'
    collectionRef = collectionRef.where(match, '==', query)
  }

  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    });

    // update values
    documents.value = results
    console.log(documents.value)
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })



  return { error, documents }
}

export default getmatch
