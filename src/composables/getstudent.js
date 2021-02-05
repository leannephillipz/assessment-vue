import { ref } from 'vue'

const getstudent = (id) => {

  const student = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/students/' + id)
      //json-server pulls the id (not a specified id) might need to look at json-server routing.
      if (!data.ok) {
        throw Error('That student does not exist')
      }
      student.value =  await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { student, error, load }
}

export default getstudent
