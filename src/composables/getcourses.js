import { ref } from 'vue'

const getCourses = () => {

  let courses = ref([])
  let error = ref(null)

  const load = async () => {
    try {

      //simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })

      let data = await fetch('http://localhost:3000/courses')
      if(!data.ok) {
        throw Error('no available data')
      }
      courses.value = await data.json()
      console.log(courses.value)
      // console.log(courses.value) //returns proxy
    }
    catch(err) {
      error.value = err.message
    }
  }
  // console.log(getCourses, error);
  return { courses, error, load }
}

export default getCourses
