import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getStudents = () => {

  const students = ref([])
  const error = ref(null)

  const load = async () => {
    try {

      const res = await projectFirestore.collection("students").get()
      students.value = res.docs.map(doc => {
        console.log(res.docs)
        return { ...doc.data(), id: doc.id }
      })
      //simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })

      // let data = await fetch('http://localhost:3000/students')
      // if(!data.ok) {
      //   throw Error('no available data')
      // }
      // students.value = await data.json()
      // console.log(students.value) //returns proxy
    }
    catch(err) {
      error.value = err.message
    }
  }
  // console.log(students, error);
  return { students, error, load }
}

export default getStudents
