import { ref } from 'vue'

const getStudents = () => {

  const students = ref([])
  const error = ref(null)

  const load = async () => {
    try {

      //simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })

      let data = await fetch('http://localhost:3000/students')
      if(!data.ok) {
        throw Error('no available data')
      }
      students.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { students, error, load }
}

export default getStudents
